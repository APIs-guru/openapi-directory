from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_FIELD_VALUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandFieldValuePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandFieldValueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandFieldValueRequest:
    path_params: FetchUnderstandFieldValuePathParams = field()
    security: FetchUnderstandFieldValueSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandFieldValueResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_field_type_field_value: Optional[shared.PreviewUnderstandAssistantFieldTypeFieldValue] = field(default=None)
    
