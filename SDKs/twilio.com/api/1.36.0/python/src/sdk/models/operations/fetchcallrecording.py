from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchCallRecordingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCallRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCallRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCallRecordingPathParams = field(default=None)
    security: FetchCallRecordingSecurity = field(default=None)
    

@dataclass
class FetchCallRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_call_call_recording: Optional[shared.APIV2010AccountCallCallRecording] = field(default=None)
    
