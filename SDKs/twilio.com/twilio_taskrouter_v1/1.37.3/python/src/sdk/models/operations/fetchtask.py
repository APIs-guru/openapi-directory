from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchTaskPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskRequest:
    path_params: FetchTaskPathParams = field()
    security: FetchTaskSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTaskResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_task: Optional[shared.TaskrouterV1WorkspaceTask] = field(default=None)
    
