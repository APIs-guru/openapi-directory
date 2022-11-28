from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class DeleteWorkflowPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkflowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWorkflowRequest:
    path_params: DeleteWorkflowPathParams = field()
    security: DeleteWorkflowSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteWorkflowResponse:
    content_type: str = field()
    status_code: int = field()
    
