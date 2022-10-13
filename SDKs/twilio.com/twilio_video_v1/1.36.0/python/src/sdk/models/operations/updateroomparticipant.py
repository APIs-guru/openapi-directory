from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_ROOM_PARTICIPANT_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateRoomParticipantPathParams:
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomParticipantRequestBodyUpdateRoomParticipantRequest:
    status: Optional[shared.RoomParticipantEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateRoomParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoomParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRoomParticipantPathParams = field(default=None)
    request: Optional[UpdateRoomParticipantRequestBodyUpdateRoomParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRoomParticipantSecurity = field(default=None)
    

@dataclass
class UpdateRoomParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_room_room_participant: Optional[shared.VideoV1RoomRoomParticipant] = field(default=None)
    
