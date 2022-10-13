from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MEDIA_RECORDING_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class FetchMediaRecordingPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMediaRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMediaRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMediaRecordingPathParams = field(default=None)
    security: FetchMediaRecordingSecurity = field(default=None)
    

@dataclass
class FetchMediaRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    media_v1_media_recording: Optional[shared.MediaV1MediaRecording] = field(default=None)
    
