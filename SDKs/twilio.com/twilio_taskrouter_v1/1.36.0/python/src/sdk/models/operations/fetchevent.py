from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_EVENT_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchEventPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEventRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchEventPathParams = field(default=None)
    security: FetchEventSecurity = field(default=None)
    

@dataclass
class FetchEventResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace_event: Optional[shared.TaskrouterV1WorkspaceEvent] = field(default=None)
    
