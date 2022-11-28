from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointTransferAUsersPlaybackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointTransferAUsersPlaybackRequestBody:
    device_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_ids') }})
    play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('play') }})
    

@dataclass
class EndpointTransferAUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointTransferAUsersPlaybackRequest:
    headers: EndpointTransferAUsersPlaybackHeaders = field()
    request: EndpointTransferAUsersPlaybackRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointTransferAUsersPlaybackSecurity = field()
    

@dataclass
class EndpointTransferAUsersPlaybackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
