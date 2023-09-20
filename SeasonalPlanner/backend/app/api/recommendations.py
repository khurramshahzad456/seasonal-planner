from fastapi import APIRouter, Query
from app.schemas import RecommendationRequest, RecommendationResponse
from app.services import get_recommendations_from_openai


router = APIRouter()


@router.get("/recommendations", response_model=RecommendationResponse)
async def get_recommendations(
    country: str = Query(...,
                         description="The country for which recommendations are desired."),
    season: str = Query(...,
                        description="The season for which recommendations are desired."),

):
    recommend_schema = RecommendationRequest(country=country, season=season)
    return await get_recommendations_from_openai(recommend_schema)
