from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetRecommendationGenresHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetRecommendationGenresSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetRecommendationGenresRequest:
    headers: EndpointGetRecommendationGenresHeaders = field(default=None)
    security: EndpointGetRecommendationGenresSecurity = field(default=None)
    

@dataclass
class EndpointGetRecommendationGenresResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    genre_seeds_object: Optional[shared.GenreSeedsObject] = field(default=None)
    status_code: int = field(default=None)
    
