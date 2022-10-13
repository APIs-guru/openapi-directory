from dataclasses import dataclass, field
from typing import Optional
DELETE_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteTaskChannelPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaskChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTaskChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteTaskChannelPathParams = field(default=None)
    security: DeleteTaskChannelSecurity = field(default=None)
    

@dataclass
class DeleteTaskChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
