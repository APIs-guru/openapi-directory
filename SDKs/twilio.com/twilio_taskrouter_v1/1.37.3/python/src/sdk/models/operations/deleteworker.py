from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteWorkerPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkerHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWorkerRequest:
    headers: DeleteWorkerHeaders = field()
    path_params: DeleteWorkerPathParams = field()
    security: DeleteWorkerSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteWorkerResponse:
    content_type: str = field()
    status_code: int = field()
    
