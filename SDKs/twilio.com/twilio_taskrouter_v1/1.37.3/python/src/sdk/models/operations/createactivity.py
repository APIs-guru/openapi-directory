from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateActivityPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateActivityCreateActivityRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    available: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Available' }})
    

@dataclass
class CreateActivitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateActivityRequest:
    path_params: CreateActivityPathParams = field()
    security: CreateActivitySecurity = field()
    request: Optional[CreateActivityCreateActivityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateActivityResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_activity: Optional[shared.TaskrouterV1WorkspaceActivity] = field(default=None)
    
