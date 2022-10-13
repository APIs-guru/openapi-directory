from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateCallRecordingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCallRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCallRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateCallRecordingPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCallRecordingSecurity = field(default=None)
    

@dataclass
class UpdateCallRecordingResponses:
    api_v2010_account_call_call_recording: Optional[shared.APIV2010AccountCallCallRecording] = field(default=None)
    

@dataclass
class UpdateCallRecordingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateCallRecordingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
