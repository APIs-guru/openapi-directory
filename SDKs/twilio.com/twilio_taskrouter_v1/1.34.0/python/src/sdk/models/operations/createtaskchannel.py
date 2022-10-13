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
class CreateTaskChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTaskChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTaskChannelPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTaskChannelSecurity = field(default=None)
    

@dataclass
class CreateTaskChannelResponses:
    taskrouter_v1_workspace_task_channel: Optional[shared.TaskrouterV1WorkspaceTaskChannel] = field(default=None)
    

@dataclass
class CreateTaskChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateTaskChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
