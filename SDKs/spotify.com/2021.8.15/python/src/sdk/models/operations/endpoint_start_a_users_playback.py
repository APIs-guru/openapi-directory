from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointStartAUsersPlaybackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointStartAUsersPlaybackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass_json
@dataclass
class EndpointStartAUsersPlaybackRequestBody:
    context_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context_uri' }})
    offset: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    position_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position_ms' }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    

@dataclass
class EndpointStartAUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointStartAUsersPlaybackRequest:
    query_params: EndpointStartAUsersPlaybackQueryParams = field(default=None)
    headers: EndpointStartAUsersPlaybackHeaders = field(default=None)
    request: Optional[EndpointStartAUsersPlaybackRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointStartAUsersPlaybackSecurity = field(default=None)
    

@dataclass
class EndpointStartAUsersPlaybackResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
