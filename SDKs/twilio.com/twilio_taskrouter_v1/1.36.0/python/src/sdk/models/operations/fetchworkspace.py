from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkspacePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkspaceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkspaceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkspacePathParams = field(default=None)
    security: FetchWorkspaceSecurity = field(default=None)
    

@dataclass
class FetchWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace: Optional[shared.TaskrouterV1Workspace] = field(default=None)
    
