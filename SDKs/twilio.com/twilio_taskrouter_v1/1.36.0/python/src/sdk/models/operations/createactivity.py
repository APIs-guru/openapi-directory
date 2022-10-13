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
class CreateActivityRequestBodyCreateActivityRequest:
    available: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Available' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateActivitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateActivityRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateActivityPathParams = field(default=None)
    request: Optional[CreateActivityRequestBodyCreateActivityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateActivitySecurity = field(default=None)
    

@dataclass
class CreateActivityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace_activity: Optional[shared.TaskrouterV1WorkspaceActivity] = field(default=None)
    
