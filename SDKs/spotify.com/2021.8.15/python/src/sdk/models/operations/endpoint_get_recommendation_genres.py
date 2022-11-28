from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetRecommendationGenresHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetRecommendationGenresSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetRecommendationGenresRequest:
    headers: EndpointGetRecommendationGenresHeaders = field()
    security: EndpointGetRecommendationGenresSecurity = field()
    

@dataclass
class EndpointGetRecommendationGenresResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    genre_seeds_object: Optional[shared.GenreSeedsObject] = field(default=None)
    
