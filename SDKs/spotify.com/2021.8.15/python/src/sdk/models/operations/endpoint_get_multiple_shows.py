from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetMultipleShowsQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetMultipleShowsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetMultipleShowsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetMultipleShowsRequest:
    query_params: EndpointGetMultipleShowsQueryParams = field(default=None)
    headers: EndpointGetMultipleShowsHeaders = field(default=None)
    security: EndpointGetMultipleShowsSecurity = field(default=None)
    

@dataclass
class EndpointGetMultipleShowsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    shows_object: Optional[shared.ShowsObject] = field(default=None)
    status_code: int = field(default=None)
    
