from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateWorkerPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWorkerCreateWorkerRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ActivitySid' }})
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    

@dataclass
class CreateWorkerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWorkerRequest:
    path_params: CreateWorkerPathParams = field()
    security: CreateWorkerSecurity = field()
    request: Optional[CreateWorkerCreateWorkerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateWorkerResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_worker: Optional[shared.TaskrouterV1WorkspaceWorker] = field(default=None)
    
