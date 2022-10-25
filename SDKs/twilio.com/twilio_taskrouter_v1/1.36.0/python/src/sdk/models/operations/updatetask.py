from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateTaskPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateTaskUpdateTaskRequest:
    assignment_status: Optional[shared.TaskEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'AssignmentStatus' }})
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    priority: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    reason: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Reason' }})
    task_channel: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TaskChannel' }})
    

@dataclass
class UpdateTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTaskPathParams = field(default=None)
    headers: UpdateTaskHeaders = field(default=None)
    request: Optional[UpdateTaskUpdateTaskRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTaskSecurity = field(default=None)
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace_task: Optional[shared.TaskrouterV1WorkspaceTask] = field(default=None)
    
