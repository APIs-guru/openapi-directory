from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnEpisodePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnEpisodeQueryParams:
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAnEpisodeHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnEpisodeSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnEpisodeRequest:
    headers: EndpointGetAnEpisodeHeaders = field()
    path_params: EndpointGetAnEpisodePathParams = field()
    query_params: EndpointGetAnEpisodeQueryParams = field()
    security: EndpointGetAnEpisodeSecurity = field()
    

@dataclass
class EndpointGetAnEpisodeResponse:
    content_type: str = field()
    status_code: int = field()
    episode_object: Optional[shared.EpisodeObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
