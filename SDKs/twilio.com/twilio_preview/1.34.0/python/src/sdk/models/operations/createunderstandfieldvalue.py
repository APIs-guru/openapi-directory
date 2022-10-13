from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_UNDERSTAND_FIELD_VALUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandFieldValuePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandFieldValueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandFieldValueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUnderstandFieldValuePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUnderstandFieldValueSecurity = field(default=None)
    

@dataclass
class CreateUnderstandFieldValueResponses:
    preview_understand_assistant_field_type_field_value: Optional[shared.PreviewUnderstandAssistantFieldTypeFieldValue] = field(default=None)
    

@dataclass
class CreateUnderstandFieldValueResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUnderstandFieldValueResponses]] = field(default=None)
    status_code: int = field(default=None)
    
