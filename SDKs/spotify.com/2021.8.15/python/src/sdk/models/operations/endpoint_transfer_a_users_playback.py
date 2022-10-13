from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointTransferAUsersPlaybackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass_json
@dataclass
class EndpointTransferAUsersPlaybackRequestBody:
    device_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_ids' }})
    play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'play' }})
    

@dataclass
class EndpointTransferAUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointTransferAUsersPlaybackRequest:
    headers: EndpointTransferAUsersPlaybackHeaders = field(default=None)
    request: EndpointTransferAUsersPlaybackRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointTransferAUsersPlaybackSecurity = field(default=None)
    

@dataclass
class EndpointTransferAUsersPlaybackResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
