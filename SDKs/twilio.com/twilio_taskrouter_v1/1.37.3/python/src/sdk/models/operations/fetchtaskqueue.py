from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchTaskQueuePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskQueueRequest:
    path_params: FetchTaskQueuePathParams = field()
    security: FetchTaskQueueSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTaskQueueResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_task_queue: Optional[shared.TaskrouterV1WorkspaceTaskQueue] = field(default=None)
    
