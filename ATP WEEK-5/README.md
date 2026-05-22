#  ATP WEEK-5

#  Advanced Backend Development with Node.js, Express & MongoDB

This folder focuses on advanced backend development concepts using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Middleware
- Authentication
- REST APIs

The project demonstrates how real-world backend applications are structured using modular architecture.

---

#  Folder Structure

```bash
ATP WEEK-5
│
├── APIs
│   ├── product_api.js
│   └── user_api.js
│
├── middleware
│   └── verifytoken.js
│
├── models
│   ├── productmodel.js
│   └── usermodel.js
│
├── server.js
├── package.json
├── package-lock.json
├── req.http
└── .gitignore
```

---

#  Technologies Used

## Backend Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Development Tools

- VS Code
- Git & GitHub
- REST Client / Postman
- npm

---

#  server.js

#  Main Backend Server

This is the entry point of the backend application.

It is responsible for:

 Creating the Express Server  
 Connecting Middleware  
 Handling API Routes  
 Managing Requests  
 Starting the Backend Server  

---

##  Concepts Covered

- Express Server Setup
- Middleware Integration
- Route Handling
- API Management
- JSON Parsing

---

##  Example Features

### Parse JSON Requests

```js
app.use(express.json())
```

---

### Start Server

```js
app.listen(PORT)
```

---

##  Backend Workflow

```text
Client Request
      ↓
Express Server
      ↓
Middleware
      ↓
API Route
      ↓
Database Interaction
      ↓
Response Sent Back
```

---

##  Learning Outcome

Understand how scalable backend servers are structured using Express.js.

---

#  APIs Folder

This folder contains all backend API route handlers.

The APIs are separated based on modules for better architecture and maintainability.

---

#  user_api.js

#  User API Module

Handles all user-related backend operations.

---

##  Features

 User Creation  
 User Retrieval  
 User Authentication  
 User Data Handling  

---

##  Concepts Covered

- Express Router
- REST APIs
- Request Handling
- Response Handling
- User Management

---

##  Workflow

```text
Frontend Request
      ↓
User API Route
      ↓
Process User Data
      ↓
Database Operation
      ↓
Return Response
```

---

##  Example API Route

```js
router.get('/users', (req, res) => {
    res.send("Users Data")
})
```

---

##  Learning Outcome

Learn how user-related APIs are built and organized.

---

#  product_api.js

#  Product API Module

Handles all product-related backend functionality.

---

##  Features

 Product APIs  
 Product Data Handling  
 Product Routes  
 API Responses  

---

##  Concepts Covered

- Product Management
- API Routing
- Modular Backend Design
- REST Architecture

---

##  Workflow

```text
Product Request
      ↓
Product API
      ↓
Process Product Data
      ↓
Database Interaction
      ↓
Return Response
```

---

##  Learning Outcome

Understand backend product management architecture.

---

#  middleware Folder

#  Authentication Middleware

Middleware functions execute before requests reach the API routes.

---

#  verifytoken.js

This middleware is used for token verification and route protection.

---

##  Features

 Authentication Checking  
 Token Verification  
 Route Protection  
 Secure API Access  

---

##  Concepts Covered

- Middleware
- Authentication
- Authorization
- Protected Routes

---

##  Middleware Workflow

```text
Client Request
      ↓
Verify Token Middleware
      ↓
Token Valid ?
   ↙         ↘
YES           NO
 ↓             ↓
Continue     Reject Request
```

---

##  Learning Outcome

Understand how authentication middleware protects backend APIs.

---

#  models Folder

This folder contains MongoDB database schemas using Mongoose.

---

#  usermodel.js

#  User Database Model

Defines the structure of user data inside MongoDB.

---

##  Features

 User Schema  
 Field Validation  
 Database Structure  
 User Collection Management  

---

##  Example Concepts

```js
const UserSchema = new mongoose.Schema({
    name: String,
    email: String
})
```

---

##  Learning Outcome

Learn how MongoDB schemas are created using Mongoose.

---

#  productmodel.js

#  Product Database Model

Defines the structure of product data.

---

##  Features

 Product Schema  
 Product Validation  
 Product Database Structure  

---

##  Learning Outcome

Understand how product collections are managed in MongoDB.

---

#  req.http

#  API Testing File

Used for testing backend APIs directly.

---

##  Features

 Test GET Requests  
 Test POST Requests  
 Verify API Responses  
 Backend Debugging  

---

##  HTTP Methods Used

```http
GET
POST
PUT
DELETE
```

---

#  package.json

#  Project Configuration File

Manages project dependencies and scripts.

---

##  Features

 Dependency Management  
 Script Configuration  
 Project Metadata  

---

##  Example

```json
"scripts": {
  "start": "node server.js"
}
```

---

#  package-lock.json

#  Dependency Lock File

Stores exact dependency versions.

---

##  Purpose

 Stable Installations  
 Consistent Dependencies  
 Faster npm Installations  

---

#  .gitignore

#  Git Ignore Configuration

Prevents unnecessary files from being pushed to GitHub.

---

##  Common Ignored Files

```bash
node_modules/
.env
```

---

#  Core Backend Concepts Learned

#  Node.js

- Server-side JavaScript
- Runtime Environment
- Backend Execution

---

#  Express.js

- Routing
- Middleware
- API Handling
- Server Management

---

#  MongoDB & Mongoose

- Schemas
- Models
- Database Collections
- Data Validation

---

#  Authentication

- Token Verification
- Protected Routes
- Middleware Security

---

#  REST APIs

- GET Requests
- POST Requests
- PUT Requests
- DELETE Requests

---

#  Complete Backend Architecture

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
MongoDB Database
   ↓
Response
   ↓
Frontend
```

---

#  How to Run the Project

#  Install Dependencies

```bash
npm install
```

---

#  Start Backend Server

```bash
node server.js
```

OR

```bash
npm start
```

---

#  Key Learning Outcomes

By completing WEEK-5, the following skills are developed:

 Backend Development  
 Express.js APIs  
 MongoDB Integration  
 Authentication Middleware  
 REST API Architecture  
 Database Modeling  
 Modular Backend Structure  

---

#  Future Improvements

This backend project can be improved by adding:

- JWT Authentication
- Password Encryption
- Environment Variables
- Error Handling
- CRUD Operations
- API Validation
- Deployment

---

#  Final Summary

This folder represents the transition from:

```text
Basic Backend
        ↓
API Development
        ↓
Database Integration
        ↓
Authentication
        ↓
Advanced Backend Architecture
```

It provides a strong foundation for building scalable backend and full-stack applications.

---
