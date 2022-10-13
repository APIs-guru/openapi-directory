from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnEpisodePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnEpisodeQueryParams:
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAnEpisodeHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetAnEpisodeSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnEpisodeRequest:
    path_params: EndpointGetAnEpisodePathParams = field(default=None)
    query_params: EndpointGetAnEpisodeQueryParams = field(default=None)
    headers: EndpointGetAnEpisodeHeaders = field(default=None)
    security: EndpointGetAnEpisodeSecurity = field(default=None)
    

@dataclass
class EndpointGetAnEpisodeResponse:
    content_type: str = field(default=None)
    episode_object: Optional[shared.EpisodeObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
