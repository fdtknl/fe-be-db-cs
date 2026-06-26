#!/bin/bash
set -e

echo "Installing dependencies..."

# Install backend dependencies
echo "📦 Restoring .NET dependencies..."
cd backend
dotnet restore
cd ..

# Install frontend dependencies
echo "📦 Installing Node dependencies..."
cd frontend
npm install
cd ..

echo "✅ Setup complete!"
echo ""
echo "To start development:"
echo "  Backend:  cd backend && dotnet run"
echo "  Frontend: cd frontend && npm start"
echo "  Or use:   docker-compose up --build"
