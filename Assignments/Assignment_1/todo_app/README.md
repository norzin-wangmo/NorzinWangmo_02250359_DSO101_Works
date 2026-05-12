# DSO101 Assignment I – Continuous Integration and Continuous Deployment (CI/CD)

## Student Information

- **Name:** Norzin Wangmo  
- **Student ID:** 02250359  
- **Module:** DSO101 – Continuous Integration and Continuous Deployment  
- **Assignment:** Assignment I  
- **Project Title:** Todo List Application  

---

# Introduction

This project is a full-stack Todo List web application developed for the DSO101 Assignment I. The application demonstrates the implementation of Continuous Integration and Continuous Deployment (CI/CD) concepts using Docker, Docker Hub, PostgreSQL, GitHub, and Render.

The system includes:
- A frontend user interface for managing tasks
- A backend CRUD API
- A PostgreSQL database for data persistence
- Docker containerization
- Deployment using Render cloud platform

The application allows users to:
- Add tasks
- Edit tasks
- Delete tasks
- Store tasks permanently in the database

---

# Technologies Used

| Technology | Purpose |
|---|---|
| HTML, CSS, JavaScript | Frontend |
| Node.js + Express.js | Backend API |
| PostgreSQL | Database |
| Docker | Containerization |
| Docker Hub | Image Registry |
| Render | Cloud Deployment |
| GitHub | Version Control |

---

# Project Structure

```text
todo_app/
│
├── Backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── .dockerignore
│
├── Frontend/
│   ├── Dockerfile
│   └── index.html
│
├── render.yaml
└── README.md
```

---

# Features

## Frontend Features
- Add tasks
- Edit tasks
- Delete tasks
- Responsive user interface
- Connected to backend API

## Backend Features
- RESTful CRUD API
- PostgreSQL database connection
- Environment variable support
- Automatic table creation

## Deployment Features
- Dockerized frontend and backend
- Docker Hub image registry
- Cloud deployment using Render
- Managed PostgreSQL database

---

# Backend API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Check backend status |
| GET | /todos | Get all tasks |
| POST | /todos | Add new task |
| PUT | /todos/:id | Update task |
| DELETE | /todos/:id | Delete task |

---

# Environment Variables

## Backend

```env
PORT=5000
NODE_ENV=production
DATABASE_URL=postgresql://username:password@host:5432/database
```

## Frontend

```js
const API_URL = "https://be-todo-t058.onrender.com";
```

---

# Docker Commands Used

## Backend Build and Push

```bash
docker buildx build --platform linux/amd64 \
-t norwang2026/be-todo:02250359 \
--push .
```

## Frontend Build and Push

```bash
docker buildx build --platform linux/amd64 \
-t norwang2026/fe-todo:02250359 \
--push .
```

---

# Deployment Process

## Backend Deployment
1. Backend Docker image was built locally.
2. The image was pushed to Docker Hub.
3. Render was configured to deploy the backend image.
4. PostgreSQL database was connected using environment variables.

## Frontend Deployment
1. Frontend Docker image was built locally.
2. Backend API URL was configured.
3. Frontend image was pushed to Docker Hub.
4. Render deployed the frontend service successfully.

---

# Screenshots

## 1. Local Backend Running

![Local Backend](./assets/ss1.png)

---

## 2. Docker Hub Repositories

![Docker Hub](./assets/ss4.png)

---


## 3. Frontend Deployment Logs

![Frontend Logs](./assets/ss7.png)

---

## 4. Live Backend Service

![Backend Live](./assets/ss5.png)

---

## 5. Live Frontend Application

![Frontend Live](./assets/ss6.png)

---

# Challenges Faced

Several issues were encountered during development and deployment:

- Port 5000 conflict on local machine
- Missing Node.js dependencies
- PostgreSQL database connection issues
- Incorrect Docker image platform architecture
- Render deployment port scanning errors
- Incorrect Docker image references

These issues were resolved by:
- Changing local development port to 5050
- Installing missing dependencies using npm
- Properly configuring `.env`
- Using Docker Buildx with `linux/amd64`
- Rebuilding and redeploying images

---

# Learning Outcomes

Through this assignment, the following concepts were learned and applied:

- Creating a full-stack web application
- Building RESTful CRUD APIs
- Connecting PostgreSQL databases
- Using environment variables securely
- Docker containerization
- Docker Hub image management
- Cloud deployment with Render
- Troubleshooting deployment and networking issues

---

# Conclusion

This assignment successfully demonstrated the implementation of a complete CI/CD workflow using modern development and deployment technologies. A full-stack Todo List application was developed using Node.js, Express.js, PostgreSQL, and JavaScript. Docker was used to containerize both frontend and backend services, and Docker Hub was used as the image registry. The application was then deployed successfully on Render with a managed PostgreSQL database.

The project provided practical experience with backend API development, cloud deployment, containerization, environment variable management, and troubleshooting real-world deployment problems. Overall, the assignment improved understanding of DevOps practices and continuous deployment workflows in modern software engineering.

---

# GitHub Repository

```text
https://github.com/norzin-wangmo/NorzinWangmo_02250359_DSO101_Works.git
```

---

# Live Deployment Links

## Frontend
```text
https://fe-todo-g9kj.onrender.com
```

## Backend
```text
https://be-todo-t058.onrender.com
```

---

# References

Docker. (2026). *Build and push your first image*. Docker Documentation.  
https://docs.docker.com/get-started/introduction/build-and-push-first-image/

Render. (2026). *Deploying Docker images*. Render Documentation.  
https://render.com/docs/deploying-an-image

Render. (2026). *Blueprint specification*. Render Documentation.  
https://render.com/docs/blueprint-spec

PostgreSQL Global Development Group. (2026). *PostgreSQL Documentation*.  
https://www.postgresql.org/docs/

Node.js Foundation. (2026). *Node.js Documentation*.  
https://nodejs.org/en/docs