from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ROOM_PARTICIPANT_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchRoomParticipantPathParams:
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoomParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoomParticipantRequest:
    path_params: FetchRoomParticipantPathParams = field()
    security: FetchRoomParticipantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRoomParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_room_room_participant: Optional[shared.VideoV1RoomRoomParticipant] = field(default=None)
    
