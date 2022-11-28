from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointAddToQueueQueryParams:
    uri: str = field(metadata={'query_param': { 'field_name': 'uri', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointAddToQueueHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointAddToQueueSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointAddToQueueRequest:
    headers: EndpointAddToQueueHeaders = field()
    query_params: EndpointAddToQueueQueryParams = field()
    security: EndpointAddToQueueSecurity = field()
    

@dataclass
class EndpointAddToQueueResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
