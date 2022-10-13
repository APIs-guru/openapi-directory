from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchTaskChannelPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTaskChannelPathParams = field(default=None)
    security: FetchTaskChannelSecurity = field(default=None)
    

@dataclass
class FetchTaskChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace_task_channel: Optional[shared.TaskrouterV1WorkspaceTaskChannel] = field(default=None)
    
