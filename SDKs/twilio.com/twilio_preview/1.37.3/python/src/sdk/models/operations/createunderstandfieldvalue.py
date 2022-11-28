from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_UNDERSTAND_FIELD_VALUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandFieldValuePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandFieldValueCreateUnderstandFieldValueRequest:
    language: str = field(metadata={'form': { 'field_name': 'Language' }})
    value: str = field(metadata={'form': { 'field_name': 'Value' }})
    synonym_of: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SynonymOf' }})
    

@dataclass
class CreateUnderstandFieldValueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandFieldValueRequest:
    path_params: CreateUnderstandFieldValuePathParams = field()
    security: CreateUnderstandFieldValueSecurity = field()
    request: Optional[CreateUnderstandFieldValueCreateUnderstandFieldValueRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUnderstandFieldValueResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_field_type_field_value: Optional[shared.PreviewUnderstandAssistantFieldTypeFieldValue] = field(default=None)
    
