# Seasonal Planner - FastAPI Backend and Frontend

Seasonal Planner is a web application that provides recommendations for things to do in a given country during a specific season. It consists of a FastAPI backend for generating recommendations using the OpenAI GPT-3 API and a frontend application for user interaction.


### Setup

Follow these steps to set up and run the FastAPI backend and React frontend:

1. Clone the repository:
    git clone https://github.com/khurramshahzad456/seasonal-planner.git

2. Make Virtual Environemnt:
    python -m venv menv

2. Install Requirements:
    pip install -r requirements.txt

3. Navigate to backend directory
    cd seasonal-planner/backend

4. Run the backend server
    uvicorn app.main:app --host 0.0.0.0 --port 3000 --reload

5. Navigate to frontend directory
    cd ..
    cd frontend

6. Run the frontend
    npm i
    npm run dev


### Test Cases
1. run `pytest` to run test cases
2. run `coverage run -m pytest` to generate report
3. for coverage report run `coverage report`