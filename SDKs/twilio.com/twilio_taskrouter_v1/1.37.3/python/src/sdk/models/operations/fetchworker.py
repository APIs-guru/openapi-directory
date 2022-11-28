from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkerPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkerRequest:
    path_params: FetchWorkerPathParams = field()
    security: FetchWorkerSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWorkerResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_worker: Optional[shared.TaskrouterV1WorkspaceWorker] = field(default=None)
    
