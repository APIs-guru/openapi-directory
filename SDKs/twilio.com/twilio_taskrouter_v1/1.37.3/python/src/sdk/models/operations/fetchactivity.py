from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchActivityPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchActivitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchActivityRequest:
    path_params: FetchActivityPathParams = field()
    security: FetchActivitySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchActivityResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_activity: Optional[shared.TaskrouterV1WorkspaceActivity] = field(default=None)
    
