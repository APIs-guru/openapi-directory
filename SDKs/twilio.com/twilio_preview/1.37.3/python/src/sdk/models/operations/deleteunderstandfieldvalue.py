from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_UNDERSTAND_FIELD_VALUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandFieldValuePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandFieldValueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandFieldValueRequest:
    path_params: DeleteUnderstandFieldValuePathParams = field()
    security: DeleteUnderstandFieldValueSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUnderstandFieldValueResponse:
    content_type: str = field()
    status_code: int = field()
    
