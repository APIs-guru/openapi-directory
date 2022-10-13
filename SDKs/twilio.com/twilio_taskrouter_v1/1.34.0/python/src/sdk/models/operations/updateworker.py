from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateWorkerPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkerHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateWorkerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWorkerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWorkerPathParams = field(default=None)
    headers: UpdateWorkerHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWorkerSecurity = field(default=None)
    

@dataclass
class UpdateWorkerResponses:
    taskrouter_v1_workspace_worker: Optional[shared.TaskrouterV1WorkspaceWorker] = field(default=None)
    

@dataclass
class UpdateWorkerResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateWorkerResponses]] = field(default=None)
    status_code: int = field(default=None)
    
