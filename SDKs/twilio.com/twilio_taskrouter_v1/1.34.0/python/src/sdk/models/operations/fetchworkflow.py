from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkflowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkflowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkflowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkflowPathParams = field(default=None)
    security: FetchWorkflowSecurity = field(default=None)
    

@dataclass
class FetchWorkflowResponses:
    taskrouter_v1_workspace_workflow: Optional[shared.TaskrouterV1WorkspaceWorkflow] = field(default=None)
    

@dataclass
class FetchWorkflowResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWorkflowResponses]] = field(default=None)
    status_code: int = field(default=None)
    
