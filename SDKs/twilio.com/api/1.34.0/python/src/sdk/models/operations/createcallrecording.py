from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateCallRecordingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCallRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCallRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateCallRecordingPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCallRecordingSecurity = field(default=None)
    

@dataclass
class CreateCallRecordingResponses:
    api_v2010_account_call_call_recording: Optional[shared.APIV2010AccountCallCallRecording] = field(default=None)
    

@dataclass
class CreateCallRecordingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateCallRecordingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
