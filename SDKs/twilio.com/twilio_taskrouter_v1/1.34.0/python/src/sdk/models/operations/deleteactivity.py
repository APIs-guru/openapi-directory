from dataclasses import dataclass, field
from typing import Optional
DELETE_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteActivityPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteActivitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteActivityRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteActivityPathParams = field(default=None)
    security: DeleteActivitySecurity = field(default=None)
    

@dataclass
class DeleteActivityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
