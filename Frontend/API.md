# HackBee API

This document provides all necessary details for integrating the frontend with the HackBee Backend.

## Authentication Overview

The API uses **OAuth2 with Bearer Tokens**.
- **Signup**: Send JSON.
- **Login**: Send Form Data (`application/x-www-form-urlencoded`).
- **Protected Routes**: Include the header `Authorization: Bearer <your_token>`.

---

## Endpoints Reference

### 1. Authentication

#### [POST] `/auth/signup`
Creates a new user account.
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "username": "johndoe",
    "password": "securepassword123"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "username": "johndoe",
    "id": 1,
    "xp": 0,
    "lives": 5
  }
  ```
- **Error Responses**:
  - `400 Bad Request`: Username already exists or password/username too short/long.

#### [POST] `/auth/login`
Authenticates a user and returns a token.
- **Content-Type**: `application/x-www-form-urlencoded`
- **Request Body**:
  - `username`: `johndoe`
  - `password`: `securepassword123`
- **Success Response (200 OK)**:
  ```json
  {
    "access_token": "eyJhbG...",
    "token_type": "bearer"
  }
  ```

---

### 2. Questions & Progress

#### [GET] `/questions/{question_num}`
Fetches details for a specific slide or question.
- **Requirement**: Bearer Token.
- **Path Parameter**: `question_num` (e.g., `1`, `2`)
- **Success Response (200 OK)**:
  ```json
  {
    "question_number": 1,
    "section_title": "Introduction to Web Security",
    "topic_title": "What is SQL Injection?",
    "content": "...",
    "isQuestion": true,
    "options": ["Option A", "Option B", "..."],
    "xp_reward": 50,
    "correct_answer": null 
  }
  ```
  > [!NOTE]
  > `correct_answer` is always hidden (null) in this GET request to prevent cheating.

#### [POST] `/questions/validate`
Validates an answer and updates user progress/XP.
- **Requirement**: Bearer Token.
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "question_number": 1,
    "answer": "Option A"
  }
  ```
- **Response (Success)**:
  ```json
  {
    "status": "success",
    "message": "Correct answer!",
    "xp_awarded": 50,
    "new_xp": old_xp + xp_awarded,
  }
  ```
- **Response (Wrong)**:
  ```json
  {
    "status": "wrong",
    "message": "Incorrect answer",
    "lives_remaining": 4
  }
  ```

#### [GET] `/questions/user/progress`
Returns the current user's stats and completed question numbers.
- **Requirement**: Bearer Token.
- **Response**:
  ```json
  {
    "user_id": 1,
    "completed_questions": [1, 2, 3],
    "xp": 150,
    "lives": 5
  }
  ```

---

### 3. Users & Leaderboard

#### [GET] `/users/leaderboard`
Returns the top 10 users by XP.
- **Requirement**: Bearer Token.
- **Response**:
  ```json
  [
    { "username": "pro_hacker", "xp": 1500 },
    { "username": "johndoe", "xp": 150 }
  ]
  ```

---

## Tutorial: Implementing Login (Form Submission)

FastAPI's standard OAuth2 implementation requires the login data to be sent as **Form Data**, not JSON. Here is how to handle it in React/JavaScript.

### 1. Handling the Form Submission

```javascript
const handleLogin = async (username, password) => {
  // We use URLSearchParams to format as application/x-www-form-urlencoded
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  try {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.access_token);
      console.log('Login successful!');
    } else {
      const error = await response.json();
      alert(`Login failed: ${error.detail}`);
    }
  } catch (err) {
    console.error('Network error:', err);
  }
};
```

### 2. Making Authenticated Requests

Once you have the token, include it in the `Authorization` header for all protected routes:

```javascript
const fetchProgress = async () => {
  const token = localStorage.getItem('token');
  
  const response = await fetch('http://localhost:8000/questions/user/progress', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  return await response.json();
};
```

---

## Important Tips for Frontend
- **Redirect on 401**: If any request returns a `401 Unauthorized`, clear the token and redirect the user back to the Login page.
- **XP & Lives**: These are managed on the server. Always update your local UI state based on the response from `/questions/validate` or `/questions/user/progress`.
- **Theory vs Quiz**: Check the `isQuestion` flag. If `false`, just show the content and call `/questions/validate` with any dummy answer (or just the question number) to mark it as read and get XP.
