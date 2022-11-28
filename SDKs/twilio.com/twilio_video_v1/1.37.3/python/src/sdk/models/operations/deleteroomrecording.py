from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ROOM_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class DeleteRoomRecordingPathParams:
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRoomRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRoomRecordingRequest:
    path_params: DeleteRoomRecordingPathParams = field()
    security: DeleteRoomRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteRoomRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    
