from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointAddToQueueQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    uri: str = field(default=None, metadata={'query_param': { 'field_name': 'uri', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointAddToQueueHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointAddToQueueSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointAddToQueueRequest:
    query_params: EndpointAddToQueueQueryParams = field(default=None)
    headers: EndpointAddToQueueHeaders = field(default=None)
    security: EndpointAddToQueueSecurity = field(default=None)
    

@dataclass
class EndpointAddToQueueResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
