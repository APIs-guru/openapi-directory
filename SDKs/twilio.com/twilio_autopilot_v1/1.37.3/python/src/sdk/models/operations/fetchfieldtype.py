from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FIELD_TYPE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchFieldTypePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFieldTypeRequest:
    path_params: FetchFieldTypePathParams = field()
    security: FetchFieldTypeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFieldTypeResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_field_type: Optional[shared.AutopilotV1AssistantFieldType] = field(default=None)
    
