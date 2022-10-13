from dataclasses import dataclass, field
from typing import Optional
DELETE_RECORDING_ADD_ON_RESULT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteRecordingAddOnResultPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRecordingAddOnResultSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRecordingAddOnResultRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteRecordingAddOnResultPathParams = field(default=None)
    security: DeleteRecordingAddOnResultSecurity = field(default=None)
    

@dataclass
class DeleteRecordingAddOnResultResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
