from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointStartAUsersPlaybackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointStartAUsersPlaybackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointStartAUsersPlaybackRequestBody:
    context_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context_uri') }})
    offset: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    position_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position_ms') }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    

@dataclass
class EndpointStartAUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointStartAUsersPlaybackRequest:
    headers: EndpointStartAUsersPlaybackHeaders = field()
    query_params: EndpointStartAUsersPlaybackQueryParams = field()
    security: EndpointStartAUsersPlaybackSecurity = field()
    request: Optional[EndpointStartAUsersPlaybackRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EndpointStartAUsersPlaybackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
