from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_MEDIA_RECORDING_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class FetchMediaRecordingPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMediaRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMediaRecordingRequest:
    path_params: FetchMediaRecordingPathParams = field()
    security: FetchMediaRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchMediaRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    media_v1_media_recording: Optional[shared.MediaV1MediaRecording] = field(default=None)
    
