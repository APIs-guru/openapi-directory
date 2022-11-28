from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateTaskPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskCreateTaskRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    priority: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    task_channel: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TaskChannel' }})
    timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    workflow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WorkflowSid' }})
    

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
    taskrouter_v1_workspace_task: Optional[shared.TaskrouterV1WorkspaceTask] = field(default=None)
    
