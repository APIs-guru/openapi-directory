from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_FIELD_TYPE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateFieldTypePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFieldTypeRequestBodyUpdateFieldTypeRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFieldTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFieldTypePathParams = field(default=None)
    request: Optional[UpdateFieldTypeRequestBodyUpdateFieldTypeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFieldTypeSecurity = field(default=None)
    

@dataclass
class UpdateFieldTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_field_type: Optional[shared.AutopilotV1AssistantFieldType] = field(default=None)
    
