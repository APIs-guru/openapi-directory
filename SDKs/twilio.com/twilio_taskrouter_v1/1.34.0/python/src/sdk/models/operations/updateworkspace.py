from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateWorkspacePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkspaceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWorkspaceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWorkspacePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWorkspaceSecurity = field(default=None)
    

@dataclass
class UpdateWorkspaceResponses:
    taskrouter_v1_workspace: Optional[shared.TaskrouterV1Workspace] = field(default=None)
    

@dataclass
class UpdateWorkspaceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateWorkspaceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
