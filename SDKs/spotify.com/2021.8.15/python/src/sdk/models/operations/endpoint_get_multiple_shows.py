from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetMultipleShowsQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetMultipleShowsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetMultipleShowsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetMultipleShowsRequest:
    headers: EndpointGetMultipleShowsHeaders = field()
    query_params: EndpointGetMultipleShowsQueryParams = field()
    security: EndpointGetMultipleShowsSecurity = field()
    

@dataclass
class EndpointGetMultipleShowsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    shows_object: Optional[shared.ShowsObject] = field(default=None)
    
