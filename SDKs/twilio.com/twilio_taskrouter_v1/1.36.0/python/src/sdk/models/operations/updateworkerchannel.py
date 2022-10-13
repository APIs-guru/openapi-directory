from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WORKER_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateWorkerChannelPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    worker_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkerChannelRequestBodyUpdateWorkerChannelRequest:
    available: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Available' }})
    capacity: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Capacity' }})
    

@dataclass
class UpdateWorkerChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWorkerChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWorkerChannelPathParams = field(default=None)
    request: Optional[UpdateWorkerChannelRequestBodyUpdateWorkerChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWorkerChannelSecurity = field(default=None)
    

@dataclass
class UpdateWorkerChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace_worker_worker_channel: Optional[shared.TaskrouterV1WorkspaceWorkerWorkerChannel] = field(default=None)
    
