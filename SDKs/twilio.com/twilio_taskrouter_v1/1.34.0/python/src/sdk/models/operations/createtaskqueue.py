from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateTaskQueuePathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTaskQueueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTaskQueuePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTaskQueueSecurity = field(default=None)
    

@dataclass
class CreateTaskQueueResponses:
    taskrouter_v1_workspace_task_queue: Optional[shared.TaskrouterV1WorkspaceTaskQueue] = field(default=None)
    

@dataclass
class CreateTaskQueueResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateTaskQueueResponses]] = field(default=None)
    status_code: int = field(default=None)
    
