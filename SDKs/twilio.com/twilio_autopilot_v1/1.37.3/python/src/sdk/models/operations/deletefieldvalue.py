from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_FIELD_VALUE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteFieldValuePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFieldValueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFieldValueRequest:
    path_params: DeleteFieldValuePathParams = field()
    security: DeleteFieldValueSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteFieldValueResponse:
    content_type: str = field()
    status_code: int = field()
    
