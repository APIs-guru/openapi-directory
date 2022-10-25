from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_FIELD_VALUE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateFieldValuePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFieldValueCreateFieldValueRequest:
    language: str = field(default=None, metadata={'form': { 'field_name': 'Language' }})
    synonym_of: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SynonymOf' }})
    value: str = field(default=None, metadata={'form': { 'field_name': 'Value' }})
    

@dataclass
class CreateFieldValueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFieldValueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateFieldValuePathParams = field(default=None)
    request: Optional[CreateFieldValueCreateFieldValueRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateFieldValueSecurity = field(default=None)
    

@dataclass
class CreateFieldValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_field_type_field_value: Optional[shared.AutopilotV1AssistantFieldTypeFieldValue] = field(default=None)
    
