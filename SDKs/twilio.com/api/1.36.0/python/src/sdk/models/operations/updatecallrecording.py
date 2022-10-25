from dataclasses import dataclass, field
from typing import Enum,Optional
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
class UpdateCallRecordingUpdateCallRecordingRequest:
    pause_behavior: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PauseBehavior' }})
    status: shared.CallRecordingEnumStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateCallRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCallRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateCallRecordingPathParams = field(default=None)
    request: Optional[UpdateCallRecordingUpdateCallRecordingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCallRecordingSecurity = field(default=None)
    

@dataclass
class UpdateCallRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_call_call_recording: Optional[shared.APIV2010AccountCallCallRecording] = field(default=None)
    
