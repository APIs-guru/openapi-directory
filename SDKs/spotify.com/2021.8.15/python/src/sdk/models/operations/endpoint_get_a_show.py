from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAShowPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAShowQueryParams:
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAShowHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAShowSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAShowRequest:
    path_params: EndpointGetAShowPathParams = field(default=None)
    query_params: EndpointGetAShowQueryParams = field(default=None)
    headers: EndpointGetAShowHeaders = field(default=None)
    security: EndpointGetAShowSecurity = field(default=None)
    

@dataclass
class EndpointGetAShowResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    show_object: Optional[shared.ShowObject] = field(default=None)
    status_code: int = field(default=None)
    
