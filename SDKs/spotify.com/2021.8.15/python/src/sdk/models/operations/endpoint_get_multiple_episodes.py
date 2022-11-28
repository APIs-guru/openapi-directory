from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetMultipleEpisodesQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetMultipleEpisodesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetMultipleEpisodesSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetMultipleEpisodesRequest:
    headers: EndpointGetMultipleEpisodesHeaders = field()
    query_params: EndpointGetMultipleEpisodesQueryParams = field()
    security: EndpointGetMultipleEpisodesSecurity = field()
    

@dataclass
class EndpointGetMultipleEpisodesResponse:
    content_type: str = field()
    status_code: int = field()
    episodes_object: Optional[shared.EpisodesObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
