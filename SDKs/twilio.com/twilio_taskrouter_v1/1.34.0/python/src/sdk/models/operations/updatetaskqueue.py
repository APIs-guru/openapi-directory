from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateTaskQueuePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskQueueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTaskQueuePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTaskQueueSecurity = field(default=None)
    

@dataclass
class UpdateTaskQueueResponses:
    taskrouter_v1_workspace_task_queue: Optional[shared.TaskrouterV1WorkspaceTaskQueue] = field(default=None)
    

@dataclass
class UpdateTaskQueueResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateTaskQueueResponses]] = field(default=None)
    status_code: int = field(default=None)
    
