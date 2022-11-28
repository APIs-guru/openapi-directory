from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_TASK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateTaskPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskCreateTaskRequest:
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    actions_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ActionsUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTaskRequest:
    path_params: CreateTaskPathParams = field()
    security: CreateTaskSecurity = field()
    request: Optional[CreateTaskCreateTaskRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTaskResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_task: Optional[shared.AutopilotV1AssistantTask] = field(default=None)
    
