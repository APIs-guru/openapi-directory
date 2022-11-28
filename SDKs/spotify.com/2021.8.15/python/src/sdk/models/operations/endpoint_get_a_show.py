from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAShowPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAShowQueryParams:
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAShowHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAShowSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAShowRequest:
    headers: EndpointGetAShowHeaders = field()
    path_params: EndpointGetAShowPathParams = field()
    query_params: EndpointGetAShowQueryParams = field()
    security: EndpointGetAShowSecurity = field()
    

@dataclass
class EndpointGetAShowResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    show_object: Optional[shared.ShowObject] = field(default=None)
    
