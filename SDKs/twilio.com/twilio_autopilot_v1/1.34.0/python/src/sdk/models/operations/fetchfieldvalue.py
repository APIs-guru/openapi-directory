from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_FIELD_VALUE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchFieldValuePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFieldValueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFieldValueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchFieldValuePathParams = field(default=None)
    security: FetchFieldValueSecurity = field(default=None)
    

@dataclass
class FetchFieldValueResponses:
    autopilot_v1_assistant_field_type_field_value: Optional[shared.AutopilotV1AssistantFieldTypeFieldValue] = field(default=None)
    

@dataclass
class FetchFieldValueResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchFieldValueResponses]] = field(default=None)
    status_code: int = field(default=None)
    
