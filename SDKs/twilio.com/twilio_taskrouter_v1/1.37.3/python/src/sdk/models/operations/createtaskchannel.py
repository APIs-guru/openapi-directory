from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateTaskChannelPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskChannelCreateTaskChannelRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    channel_optimized_routing: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ChannelOptimizedRouting' }})
    

@dataclass
class CreateTaskChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTaskChannelRequest:
    path_params: CreateTaskChannelPathParams = field()
    security: CreateTaskChannelSecurity = field()
    request: Optional[CreateTaskChannelCreateTaskChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTaskChannelResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_task_channel: Optional[shared.TaskrouterV1WorkspaceTaskChannel] = field(default=None)
    
