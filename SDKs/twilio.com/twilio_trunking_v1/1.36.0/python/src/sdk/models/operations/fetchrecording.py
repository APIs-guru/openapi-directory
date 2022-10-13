from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_RECORDING_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class FetchRecordingPathParams:
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRecordingPathParams = field(default=None)
    security: FetchRecordingSecurity = field(default=None)
    

@dataclass
class FetchRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trunking_v1_trunk_recording: Optional[shared.TrunkingV1TrunkRecording] = field(default=None)
    
