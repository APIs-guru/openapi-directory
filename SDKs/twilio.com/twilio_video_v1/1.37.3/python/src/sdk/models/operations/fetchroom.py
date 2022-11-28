from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ROOM_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchRoomPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoomSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoomRequest:
    path_params: FetchRoomPathParams = field()
    security: FetchRoomSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRoomResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_room: Optional[shared.VideoV1Room] = field(default=None)
    
