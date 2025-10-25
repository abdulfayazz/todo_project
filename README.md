# Todo List

This is a full-stack web application for managing your tasks. It implements all CRUD (Create, Read, Update, Delete) operations and uses the following technologies:

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: MongoDB

## Features

1. Add new tasks
2. View all tasks
3. Update existing tasks
4. Delete tasks

## Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm
- MongoDB

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/abdulfayazz/todo_project
```

### Install Dependencies

To install both frontend and backend dependencies, use the provided PowerShell script (for Windows users):

#### Run the Command in PowerShell

```powershell
powershell -ExecutionPolicy Bypass -File .\requirements.ps1
```

#### For users on other operating systems, manually install dependencies using the following commands:

#### Frontend

```bash
cd frontend
npm install react react-dom axios react-toastify react-router-dom react-icons
cd ..
```

#### Backend

```bash
cd backend
npm install express mongoose cors nodemon require nodemailer
cd ..
```

### Start the Application

#### Backend

Start the backend server:

```bash
cd backend
npm i express
npm start
```

#### Frontend

Start the frontend development server:

```bash
cd frontend
npm run dev
```

### Access the Application

Open your browser and navigate to:

```
http://localhost:3000
```

## Folder Structure

```
Todo_project/
├── backend/          # Backend code
├── frontend/         # Frontend code
└── README.md         # Documentation
```

## Additional Notes

- Ensure MongoDB is running locally.
---

Hope you are watching my project now 🙂
