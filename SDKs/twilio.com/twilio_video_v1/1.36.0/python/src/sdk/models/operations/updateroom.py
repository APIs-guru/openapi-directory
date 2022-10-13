from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_ROOM_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateRoomPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomRequestBodyUpdateRoomRequest:
    status: shared.RoomEnumRoomStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateRoomSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoomRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRoomPathParams = field(default=None)
    request: Optional[UpdateRoomRequestBodyUpdateRoomRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRoomSecurity = field(default=None)
    

@dataclass
class UpdateRoomResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_room: Optional[shared.VideoV1Room] = field(default=None)
    
