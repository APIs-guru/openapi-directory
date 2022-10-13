from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateWorkflowPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWorkflowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWorkflowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateWorkflowPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateWorkflowSecurity = field(default=None)
    

@dataclass
class CreateWorkflowResponses:
    taskrouter_v1_workspace_workflow: Optional[shared.TaskrouterV1WorkspaceWorkflow] = field(default=None)
    

@dataclass
class CreateWorkflowResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateWorkflowResponses]] = field(default=None)
    status_code: int = field(default=None)
    
