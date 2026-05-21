# 📖 ATP WEEK-3 & WEEK-4

# 🛠️ Backend Development with Node.js & Express.js

This folder focuses on backend development concepts using:

- Node.js
- Express.js
- REST APIs
- Routing
- Middleware
- Request Handling

The project demonstrates how server-side applications are structured and how APIs are built for frontend communication.

---

# 📂 Folder Structure

```bash
ATP WEEK-3&4
│
├── APIs
│   ├── productapi.js
│   └── userapi.js
│
├── package.json
├── package-lock.json
├── req.HTTP
├── server.js
└── .gitignore
```

---

# 🚀 Technologies Used

## Backend Technologies

- Node.js
- Express.js

---

## Tools Used

- VS Code
- Git & GitHub
- REST Client / Postman
- npm

---

# 📄 server.js

# 🌐 Main Backend Server

This is the entry point of the backend application.

It is responsible for:

✅ Creating the Express Server  
✅ Handling Middleware  
✅ Connecting APIs  
✅ Starting the Server  
✅ Managing Routes  

---

## 📌 Concepts Covered

- Express Server Setup
- Middleware Configuration
- Route Handling
- API Integration
- Server Listening

---

## 🧠 Example Features

```js
app.use(express.json())
```

Used for parsing incoming JSON requests.

---

```js
app.listen(PORT)
```

Starts the backend server on a specific port.

---

# 🔄 Backend Workflow

```text
Client Request
      ↓
Express Server
      ↓
Middleware
      ↓
API Route
      ↓
Response Sent Back
```

---

## 🎯 Learning Outcome

Understand how backend servers are created and managed using Express.js.

---

# 📂 APIs Folder

This folder contains all API route handling logic.

The APIs are separated based on functionality for better project structure.

---

# 📄 userapi.js

# 👤 User API Routes

Handles user-related backend operations.

---

## 📌 Features

✅ Create User  
✅ Read User Data  
✅ Handle User Requests  
✅ Send API Responses  

---

## 📌 Concepts Covered

- Express Router
- Route Handling
- Request & Response Objects
- REST API Development

---

## 🔄 Example Workflow

```text
Frontend Request
      ↓
User API Route
      ↓
Process Data
      ↓
Send Response
```

---

## 🧠 Example API Structure

```js
router.get('/users', (req, res) => {
    res.send("Users Data")
})
```

---

## 🎯 Learning Outcome

Understand how APIs are built for handling user operations.

---

# 📄 productapi.js

# 🛍️ Product API Routes

Handles product-related backend functionality.

---

## 📌 Features

✅ Product APIs  
✅ Product Data Handling  
✅ Route Management  
✅ API Responses  

---

## 📌 Concepts Covered

- API Routing
- Modular Backend Structure
- REST API Concepts
- Product Handling

---

## 🔄 Example Workflow

```text
Product Request
      ↓
Product API
      ↓
Process Product Data
      ↓
Return Response
```

---

## 🎯 Learning Outcome

Learn how product APIs are structured in backend applications.

---

# 📄 req.HTTP

# 🧪 API Testing File

This file is used for testing backend APIs directly.

It helps developers test requests without frontend integration.

---

## 📌 Features

✅ Test GET Requests  
✅ Test POST Requests  
✅ Verify API Responses  
✅ Debug Backend APIs  

---

## 📌 HTTP Methods Used

```http
GET
POST
PUT
DELETE
```

---

## 🎯 Learning Outcome

Understand how APIs are tested during backend development.

---

# 📄 package.json

# 📦 Project Configuration File

This file manages:

- Project metadata
- Dependencies
- Scripts
- Project information

---

## 📌 Important Sections

### Dependencies

Stores installed packages.

Example:

```json
"express": "^4.x.x"
```

---

### Scripts

Used for running the project.

Example:

```json
"start": "node server.js"
```

---

## 🎯 Learning Outcome

Understand project dependency and script management using npm.

---

# 📄 package-lock.json

# 🔒 Dependency Lock File

This file stores the exact versions of installed dependencies.

---

## 📌 Purpose

✅ Dependency consistency  
✅ Faster installations  
✅ Stable project setup  

---

# 📄 .gitignore

# 🚫 Ignored Files Configuration

This file prevents unnecessary files from being uploaded to GitHub.

---

## 📌 Common Ignored Files

```bash
node_modules/
.env
```

---

## 🎯 Learning Outcome

Learn proper Git and repository management practices.

---

# 🧠 Core Backend Concepts Learned

# ✅ Node.js

- Runtime Environment
- Server-side JavaScript
- Backend Execution

---

# ✅ Express.js

- Routing
- Middleware
- API Handling
- Server Management

---

# ✅ REST APIs

- GET Requests
- POST Requests
- API Responses
- Client-Server Communication

---

# ✅ Backend Architecture

- Modular Structure
- Route Separation
- API Organization

---

# 🔄 Complete Backend Request Lifecycle

```text
Frontend
   ↓
HTTP Request
   ↓
Express Server
   ↓
Middleware
   ↓
API Route
   ↓
Process Logic
   ↓
Response
   ↓
Frontend
```

---

# ▶️ How to Run the Project

# 📥 Install Dependencies

```bash
npm install
```

---

# ▶️ Start Backend Server

```bash
node server.js
```

OR

```bash
npm start
```

---

# 🌟 Key Learning Outcomes

By completing WEEK-3 & WEEK-4, the following skills are developed:

✅ Backend Development Fundamentals  
✅ Express.js Server Creation  
✅ API Development  
✅ Route Handling  
✅ REST API Testing  
✅ Modular Backend Architecture  
✅ Node.js Project Structure  

---

# 🚀 Future Improvements

This backend project can be improved by adding:

- MongoDB Database
- Authentication
- JWT Tokens
- Error Handling
- Environment Variables
- CRUD Operations
- API Validation

---

# 🏁 Final Summary

This folder represents the transition from:

```text
Frontend Development
          ↓
Backend Development
          ↓
REST API Architecture
```

It provides a strong foundation for building full-stack applications using Node.js and Express.js.

---
