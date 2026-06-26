# Todo App - React Frontend + .NET Backend + PostgreSQL

A full-stack todo application with a React frontend, ASP.NET Core backend, and PostgreSQL database.

## Tech Stack

- **Frontend**: React 18
- **Backend**: ASP.NET Core 8.0 with Entity Framework Core
- **Database**: PostgreSQL 16
- **Containerization**: Docker & Docker Compose

## Quick Start with Docker Compose

The easiest way to run the entire application:

```bash
docker-compose up --build
```

This will start:
- PostgreSQL on `localhost:5432`
- Backend API on `http://localhost:8080`
- Frontend on `http://localhost:3000`

Once running, open `http://localhost:3000` in your browser.

## Manual Setup

### Prerequisites

- .NET 8.0 SDK
- Node.js 18+
- PostgreSQL 16

### Backend Setup

```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run
```

The API will be available at `http://localhost:8080`
Swagger UI: `http://localhost:8080/swagger`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

## API Endpoints

Base URL: `http://localhost:8080/api/todoitems`

- `GET /` - Get all todos
- `GET /{id}` - Get a specific todo
- `POST /` - Create a new todo
- `PUT /{id}` - Update a todo
- `DELETE /{id}` - Delete a todo

## Project Structure

```
.
├── backend/
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   ├── Dockerfile
│   ├── Program.cs
│   └── TodoApi.csproj
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Database Migrations

Migrations are automatically applied when the backend starts. To create new migrations:

```bash
cd backend
dotnet ef migrations add YourMigrationName
```

## Features

✅ Create, read, update, and delete todos
✅ Mark todos as completed
✅ Add descriptions to todos
✅ Real-time UI updates
✅ Full Docker containerization
✅ PostgreSQL persistence
✅ Entity Framework Core ORM

## Stopping the Application

```bash
docker-compose down
```

To remove volumes:

```bash
docker-compose down -v
```

## Notes

- The frontend has CORS enabled to communicate with the backend
- Default PostgreSQL credentials: `postgres:postgres`
- All data is persisted in the PostgreSQL volume
- The backend automatically creates the database schema on startup
