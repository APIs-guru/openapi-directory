from dataclasses import dataclass, field
from typing import Optional
DELETE_UNDERSTAND_FIELD_VALUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandFieldValuePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandFieldValueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandFieldValueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUnderstandFieldValuePathParams = field(default=None)
    security: DeleteUnderstandFieldValueSecurity = field(default=None)
    

@dataclass
class DeleteUnderstandFieldValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
