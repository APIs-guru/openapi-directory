from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_FIELD_TYPE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchFieldTypePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFieldTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchFieldTypePathParams = field(default=None)
    security: FetchFieldTypeSecurity = field(default=None)
    

@dataclass
class FetchFieldTypeResponses:
    autopilot_v1_assistant_field_type: Optional[shared.AutopilotV1AssistantFieldType] = field(default=None)
    

@dataclass
class FetchFieldTypeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchFieldTypeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
