from typing import List
from pydantic import BaseModel, field_validator


class RecommendationRequest(BaseModel):
    country: str
    season: str

    @field_validator("season")
    def validate_season(cls, season):
        valid_seasons = ["spring", "summer", "autumn", "winter"]
        if season.lower() not in valid_seasons:
            raise ValueError(
                "Invalid season. Valid seasons are spring, summer, autumn, winter.")
        return season


class RecommendationResponse(BaseModel):
    country: str
    season: str
    recommendations: List[str]
