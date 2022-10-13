from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ROOM_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchRoomRecordingPathParams:
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoomRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoomRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRoomRecordingPathParams = field(default=None)
    security: FetchRoomRecordingSecurity = field(default=None)
    

@dataclass
class FetchRoomRecordingResponses:
    video_v1_room_room_recording: Optional[shared.VideoV1RoomRoomRecording] = field(default=None)
    

@dataclass
class FetchRoomRecordingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchRoomRecordingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
