from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateWorkerPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWorkerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWorkerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateWorkerPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateWorkerSecurity = field(default=None)
    

@dataclass
class CreateWorkerResponses:
    taskrouter_v1_workspace_worker: Optional[shared.TaskrouterV1WorkspaceWorker] = field(default=None)
    

@dataclass
class CreateWorkerResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateWorkerResponses]] = field(default=None)
    status_code: int = field(default=None)
    
