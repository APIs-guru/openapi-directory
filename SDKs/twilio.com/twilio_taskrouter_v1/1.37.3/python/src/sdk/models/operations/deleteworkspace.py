from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteWorkspacePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkspaceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWorkspaceRequest:
    path_params: DeleteWorkspacePathParams = field()
    security: DeleteWorkspaceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    
