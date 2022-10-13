from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateWorkspaceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWorkspaceRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateWorkspaceSecurity = field(default=None)
    

@dataclass
class CreateWorkspaceResponses:
    taskrouter_v1_workspace: Optional[shared.TaskrouterV1Workspace] = field(default=None)
    

@dataclass
class CreateWorkspaceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateWorkspaceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
