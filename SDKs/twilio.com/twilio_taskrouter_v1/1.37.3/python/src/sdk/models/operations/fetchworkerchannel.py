from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WORKER_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkerChannelPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    worker_sid: str = field(metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkerChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkerChannelRequest:
    path_params: FetchWorkerChannelPathParams = field()
    security: FetchWorkerChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWorkerChannelResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_worker_worker_channel: Optional[shared.TaskrouterV1WorkspaceWorkerWorkerChannel] = field(default=None)
    
