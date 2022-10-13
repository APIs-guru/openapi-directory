from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ROOM_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchRoomPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoomSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoomRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRoomPathParams = field(default=None)
    security: FetchRoomSecurity = field(default=None)
    

@dataclass
class FetchRoomResponses:
    video_v1_room: Optional[shared.VideoV1Room] = field(default=None)
    

@dataclass
class FetchRoomResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchRoomResponses]] = field(default=None)
    status_code: int = field(default=None)
    
