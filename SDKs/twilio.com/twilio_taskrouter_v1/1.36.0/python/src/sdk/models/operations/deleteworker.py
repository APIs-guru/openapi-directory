from dataclasses import dataclass, field
from typing import Optional
DELETE_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteWorkerPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkerHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class DeleteWorkerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWorkerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteWorkerPathParams = field(default=None)
    headers: DeleteWorkerHeaders = field(default=None)
    security: DeleteWorkerSecurity = field(default=None)
    

@dataclass
class DeleteWorkerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
