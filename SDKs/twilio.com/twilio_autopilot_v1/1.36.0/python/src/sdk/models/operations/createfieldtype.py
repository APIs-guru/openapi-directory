from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_FIELD_TYPE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateFieldTypePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFieldTypeRequestBodyCreateFieldTypeRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: str = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFieldTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateFieldTypePathParams = field(default=None)
    request: Optional[CreateFieldTypeRequestBodyCreateFieldTypeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateFieldTypeSecurity = field(default=None)
    

@dataclass
class CreateFieldTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_field_type: Optional[shared.AutopilotV1AssistantFieldType] = field(default=None)
    
