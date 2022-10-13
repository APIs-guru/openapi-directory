from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ROOM_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class CreateRoomSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRoomRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateRoomSecurity = field(default=None)
    

@dataclass
class CreateRoomResponses:
    video_v1_room: Optional[shared.VideoV1Room] = field(default=None)
    

@dataclass
class CreateRoomResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateRoomResponses]] = field(default=None)
    status_code: int = field(default=None)
    
