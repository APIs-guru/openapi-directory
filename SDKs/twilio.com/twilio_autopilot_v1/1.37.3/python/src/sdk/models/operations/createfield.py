from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_FIELD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateFieldPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFieldCreateFieldRequest:
    field_type: str = field(metadata={'form': { 'field_name': 'FieldType' }})
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateFieldSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFieldRequest:
    path_params: CreateFieldPathParams = field()
    security: CreateFieldSecurity = field()
    request: Optional[CreateFieldCreateFieldRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateFieldResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_task_field: Optional[shared.AutopilotV1AssistantTaskField] = field(default=None)
    
