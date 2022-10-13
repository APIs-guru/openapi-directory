from dataclasses import dataclass, field
from typing import Optional
DELETE_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteWorkspacePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkspaceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWorkspaceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteWorkspacePathParams = field(default=None)
    security: DeleteWorkspaceSecurity = field(default=None)
    

@dataclass
class DeleteWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
