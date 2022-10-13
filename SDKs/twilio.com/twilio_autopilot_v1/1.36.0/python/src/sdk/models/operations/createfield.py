from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_FIELD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateFieldPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFieldRequestBodyCreateFieldRequest:
    field_type: str = field(default=None, metadata={'form': { 'field_name': 'FieldType' }})
    unique_name: str = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateFieldSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFieldRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateFieldPathParams = field(default=None)
    request: Optional[CreateFieldRequestBodyCreateFieldRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateFieldSecurity = field(default=None)
    

@dataclass
class CreateFieldResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_task_field: Optional[shared.AutopilotV1AssistantTaskField] = field(default=None)
    
