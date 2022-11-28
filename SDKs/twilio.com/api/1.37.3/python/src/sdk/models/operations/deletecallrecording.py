from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteCallRecordingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCallRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCallRecordingRequest:
    path_params: DeleteCallRecordingPathParams = field()
    security: DeleteCallRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCallRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    
