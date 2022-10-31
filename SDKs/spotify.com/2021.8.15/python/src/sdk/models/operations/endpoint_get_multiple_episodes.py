from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetMultipleEpisodesQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetMultipleEpisodesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetMultipleEpisodesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetMultipleEpisodesRequest:
    query_params: EndpointGetMultipleEpisodesQueryParams = field(default=None)
    headers: EndpointGetMultipleEpisodesHeaders = field(default=None)
    security: EndpointGetMultipleEpisodesSecurity = field(default=None)
    

@dataclass
class EndpointGetMultipleEpisodesResponse:
    content_type: str = field(default=None)
    episodes_object: Optional[shared.EpisodesObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
