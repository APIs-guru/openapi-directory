from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateTaskChannelPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskChannelCreateTaskChannelRequest:
    channel_optimized_routing: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ChannelOptimizedRouting' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: str = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateTaskChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTaskChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTaskChannelPathParams = field(default=None)
    request: Optional[CreateTaskChannelCreateTaskChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTaskChannelSecurity = field(default=None)
    

@dataclass
class CreateTaskChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace_task_channel: Optional[shared.TaskrouterV1WorkspaceTaskChannel] = field(default=None)
    
