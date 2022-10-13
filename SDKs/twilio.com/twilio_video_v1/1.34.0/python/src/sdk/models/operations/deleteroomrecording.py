from dataclasses import dataclass, field
from typing import Optional
DELETE_ROOM_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class DeleteRoomRecordingPathParams:
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRoomRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRoomRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteRoomRecordingPathParams = field(default=None)
    security: DeleteRoomRecordingSecurity = field(default=None)
    

@dataclass
class DeleteRoomRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
