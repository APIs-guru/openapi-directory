from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteTaskPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaskHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTaskRequest:
    headers: DeleteTaskHeaders = field()
    path_params: DeleteTaskPathParams = field()
    security: DeleteTaskSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteTaskResponse:
    content_type: str = field()
    status_code: int = field()
    
