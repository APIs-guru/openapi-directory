from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchCallRecordingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCallRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCallRecordingRequest:
    path_params: FetchCallRecordingPathParams = field()
    security: FetchCallRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCallRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_call_recording: Optional[shared.APIV2010AccountCallCallRecording] = field(default=None)
    
