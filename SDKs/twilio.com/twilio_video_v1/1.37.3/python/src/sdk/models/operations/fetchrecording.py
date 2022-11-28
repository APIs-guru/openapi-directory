from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchRecordingPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRecordingRequest:
    path_params: FetchRecordingPathParams = field()
    security: FetchRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_recording: Optional[shared.VideoV1Recording] = field(default=None)
    
