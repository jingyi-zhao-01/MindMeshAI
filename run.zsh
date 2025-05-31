#!/bin/zsh
VENV_PATH="./venv"

echo "Activating virtual environment..."
source "$VENV_PATH/bin/activate"

echo "Starting FastAPI backend..."
uvicorn server.main:app --host 0.0.0.0 --port 8000 --workers 4