from dataclasses import dataclass, field
from typing import Optional
DELETE_RECORDING_ADD_ON_RESULT_PAYLOAD_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteRecordingAddOnResultPayloadPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    add_on_result_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AddOnResultSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRecordingAddOnResultPayloadSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRecordingAddOnResultPayloadRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteRecordingAddOnResultPayloadPathParams = field(default=None)
    security: DeleteRecordingAddOnResultPayloadSecurity = field(default=None)
    

@dataclass
class DeleteRecordingAddOnResultPayloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
