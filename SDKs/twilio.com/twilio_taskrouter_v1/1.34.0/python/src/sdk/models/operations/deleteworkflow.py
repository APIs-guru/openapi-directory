from dataclasses import dataclass, field
from typing import Optional
DELETE_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteWorkflowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkflowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWorkflowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteWorkflowPathParams = field(default=None)
    security: DeleteWorkflowSecurity = field(default=None)
    

@dataclass
class DeleteWorkflowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
