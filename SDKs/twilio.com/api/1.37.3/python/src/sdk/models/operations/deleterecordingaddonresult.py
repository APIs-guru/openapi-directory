from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_RECORDING_ADD_ON_RESULT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteRecordingAddOnResultPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = field(metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRecordingAddOnResultSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRecordingAddOnResultRequest:
    path_params: DeleteRecordingAddOnResultPathParams = field()
    security: DeleteRecordingAddOnResultSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteRecordingAddOnResultResponse:
    content_type: str = field()
    status_code: int = field()
    
