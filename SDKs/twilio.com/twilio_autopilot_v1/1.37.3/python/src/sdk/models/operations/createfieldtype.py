from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_FIELD_TYPE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateFieldTypePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFieldTypeCreateFieldTypeRequest:
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFieldTypeRequest:
    path_params: CreateFieldTypePathParams = field()
    security: CreateFieldTypeSecurity = field()
    request: Optional[CreateFieldTypeCreateFieldTypeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateFieldTypeResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_field_type: Optional[shared.AutopilotV1AssistantFieldType] = field(default=None)
    
