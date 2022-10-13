from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateActivityPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateActivitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateActivityRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateActivityPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateActivitySecurity = field(default=None)
    

@dataclass
class CreateActivityResponses:
    taskrouter_v1_workspace_activity: Optional[shared.TaskrouterV1WorkspaceActivity] = field(default=None)
    

@dataclass
class CreateActivityResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateActivityResponses]] = field(default=None)
    status_code: int = field(default=None)
    
