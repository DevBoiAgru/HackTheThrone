import time
import json
import logging
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import StreamingResponse

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("hackbee_api")

class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start_time = time.perf_counter()
        
        # Capture Request Path and Method
        path = request.url.path
        method = request.method
        
        # Capture Request Body
        request_body = b""
        async def set_body(request: Request, body: bytes):
            async def receive():
                return {"type": "http.request", "body": body}
            request._receive = receive

        body = await request.body()
        if body:
            request_body = body
            # Re-set body for downstream handlers
            await set_body(request, body)

        # Process Request
        try:
            response = await call_next(request)
        except Exception as e:
            process_time = (time.perf_counter() - start_time) * 1000
            logger.error(f"Error processing request: {method} {path} | Time: {process_time:.2f}ms | Error: {str(e)}")
            raise e

        # Capture Response Details
        process_time = (time.perf_counter() - start_time) * 1000
        status_code = response.status_code
        
        # Capture Response Body
        response_body = b""
        if isinstance(response, StreamingResponse):
             # For streaming responses, we iterate through the content
             res_body = [section async for section in response.body_iterator]
             response.body_iterator = iterate_in_threadpool(iter(res_body))
             response_body = b"".join(res_body)
        else:
            # For regular responses
            try:
                # We need to read the body and then re-wrap it so it can still be sent
                response_body = b""
                async for chunk in response.body_iterator:
                    response_body += chunk
                
                # Re-create the body iterator
                async def new_body_iterator():
                    yield response_body
                
                response.body_iterator = new_body_iterator()
            except Exception as e:
                logger.warning(f"Could not capture response body: {e}")

        # Construct Log Message
        log_data = {
            "method": method,
            "path": path,
            "status_code": status_code,
            "duration_ms": f"{process_time:.2f}",
            "request_body": request_body.decode("utf-8", errors="ignore") if request_body else None,
            "response_body": response_body.decode("utf-8", errors="ignore") if response_body else None,
        }

        # Format and Log
        logger.info(json.dumps(log_data, indent=2))
        
        return response

# Helper for streaming response re-iteration if needed
from starlette.concurrency import iterate_in_threadpool
