from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteTaskChannelPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaskChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTaskChannelRequest:
    path_params: DeleteTaskChannelPathParams = field()
    security: DeleteTaskChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteTaskChannelResponse:
    content_type: str = field()
    status_code: int = field()
    
