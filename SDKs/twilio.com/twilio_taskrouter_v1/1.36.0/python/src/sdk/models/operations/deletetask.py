from dataclasses import dataclass, field
from typing import Optional
DELETE_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteTaskPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaskHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteTaskPathParams = field(default=None)
    headers: DeleteTaskHeaders = field(default=None)
    security: DeleteTaskSecurity = field(default=None)
    

@dataclass
class DeleteTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
