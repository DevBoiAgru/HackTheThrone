from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

@lru_cache()
def get_settings():
    return Settings()

class Settings(BaseSettings):
    app_name: str = "HackBee"
    secret_key: str
    database_url: str = "postgresql://user:password@localhost/dbname"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 3000

    model_config = SettingsConfigDict(env_file=".env")