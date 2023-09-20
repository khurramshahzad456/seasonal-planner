import openai
from app.schemas import RecommendationRequest
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")


async def get_recommendations_from_openai(schema: RecommendationRequest):
    prompt = f"Recommend three things to do in {schema.country} during {schema.season} season."

    try:
        response = openai.Completion.create(
            engine="text-davinci-002",
            prompt=prompt,
            max_tokens=100,
        )

        recommendations = [item['text'] for item in response.choices]
        recommendations = [line.strip()
                           for line in recommendations[0].split('\n') if line.strip()]

        response_data = {
            "country": schema.country,
            "season": schema.season,
            "recommendations": recommendations
        }

        return response_data

    except Exception as e:
        return e
