from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteTaskQueuePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaskQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTaskQueueRequest:
    path_params: DeleteTaskQueuePathParams = field()
    security: DeleteTaskQueueSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteTaskQueueResponse:
    content_type: str = field()
    status_code: int = field()
    
