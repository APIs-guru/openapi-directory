from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkspacePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkspaceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkspaceRequest:
    path_params: FetchWorkspacePathParams = field()
    security: FetchWorkspaceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace: Optional[shared.TaskrouterV1Workspace] = field(default=None)
    
