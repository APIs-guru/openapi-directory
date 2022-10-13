from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateActivityPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateActivitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateActivityRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateActivityPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateActivitySecurity = field(default=None)
    

@dataclass
class UpdateActivityResponses:
    taskrouter_v1_workspace_activity: Optional[shared.TaskrouterV1WorkspaceActivity] = field(default=None)
    

@dataclass
class UpdateActivityResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateActivityResponses]] = field(default=None)
    status_code: int = field(default=None)
    
