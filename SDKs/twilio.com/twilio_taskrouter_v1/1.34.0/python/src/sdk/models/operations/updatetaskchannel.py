from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateTaskChannelPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTaskChannelPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTaskChannelSecurity = field(default=None)
    

@dataclass
class UpdateTaskChannelResponses:
    taskrouter_v1_workspace_task_channel: Optional[shared.TaskrouterV1WorkspaceTaskChannel] = field(default=None)
    

@dataclass
class UpdateTaskChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateTaskChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
