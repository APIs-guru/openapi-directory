from dataclasses import dataclass, field
from typing import Optional
DELETE_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteTaskQueuePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaskQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTaskQueueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteTaskQueuePathParams = field(default=None)
    security: DeleteTaskQueueSecurity = field(default=None)
    

@dataclass
class DeleteTaskQueueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
