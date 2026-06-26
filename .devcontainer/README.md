# Codespaces Configuration for Todo App

This project is configured to work seamlessly with GitHub Codespaces for .NET and React development.

## What's Included

- **.NET 8.0 SDK** - For backend development
- **Node.js 18** - For React frontend development
- **PostgreSQL 16** - Database with auto-start
- **VS Code Extensions** - C#, ESLint, Prettier, SQL, and GitHub Copilot
- **Auto Port Forwarding** - Ports 3000, 5432, and 8080 are automatically forwarded

## Getting Started in Codespaces

1. **Create a Codespace**
   - Click "Code" button on the repository
   - Select "Codespaces" tab
   - Click "Create codespace on main"

2. **Wait for Setup**
   - The devcontainer will automatically install all dependencies
   - This takes 2-3 minutes

3. **Start Developing**

   **Option 1: Development Mode (recommended for coding)**
   ```bash
   # Terminal 1: Backend
   cd backend
   dotnet run
   
   # Terminal 2: Frontend
   cd frontend
   npm start
   ```

   **Option 2: Docker Compose (full stack)**
   ```bash
   docker-compose up --build
   ```

## Port Forwarding

Ports are automatically forwarded in Codespaces:
- **3000** - React Frontend (http://localhost:3000)
- **5432** - PostgreSQL Database
- **8080** - .NET Backend API (http://localhost:8080)

You'll see notifications when services start.

## Development Workflow

### Backend Development
```bash
cd backend

# Run the API
dotnet run

# Create database migrations
dotnet ef migrations add YourMigrationName

# Apply migrations
dotnet ef database update

# Run tests (if added)
dotnet test
```

### Frontend Development
```bash
cd frontend

# Start dev server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## VS Code Extensions

Automatically installed:
- **C# Dev Kit** - C# development
- **.NET Runtime** - .NET tooling
- **Prettier** - Code formatting
- **ESLint** - JavaScript linting
- **GitHub Copilot** - AI-powered suggestions
- **SQL Server** - Database exploration

## Environment

- **Dotnet Runtime**: 8.0
- **Node.js**: 18
- **PostgreSQL**: 16
- **OS**: Linux (Ubuntu)

## Database Connection

PostgreSQL is automatically available when using Docker Compose:
- Host: `postgres` (in docker-compose)
- Host: `localhost` (direct development)
- Port: 5432
- Database: `tododb`
- User: `postgres`
- Password: `postgres`

## Troubleshooting

**Ports already in use?**
```bash
# Kill processes on specific ports
lsof -ti:3000 | xargs kill -9  # Frontend
lsof -ti:8080 | xargs kill -9  # Backend
lsof -ti:5432 | xargs kill -9  # PostgreSQL
```

**Need to rebuild devcontainer?**
- Click the Codespaces menu (bottom left) in VS Code
- Select "Rebuild container"

**Dependencies not installed?**
```bash
# Reinstall manually
cd backend && dotnet restore && cd ..
cd frontend && npm install && cd ..
```

## Performance Tips

1. Close unused terminals to save resources
2. Use VS Code's built-in debugger for step-through debugging
3. Hot reload is enabled for both frontend and backend
4. Database changes persist across Codespace restarts

## Stopping Services

```bash
# Stop all Docker containers
docker-compose down

# Stop individual services
# Just close the terminal where they're running
```
