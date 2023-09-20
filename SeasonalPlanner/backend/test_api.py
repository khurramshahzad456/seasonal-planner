from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_success_api():
    query_param = {"country": "Germany", "season": "spring"}

    response = client.get("/recommendations", params=query_param)
    assert response.status_code == 200


def test_with_no_params():

    response = client.get("/recommendations")
    assert response.status_code == 422
