from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateWorkflowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkflowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWorkflowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWorkflowPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWorkflowSecurity = field(default=None)
    

@dataclass
class UpdateWorkflowResponses:
    taskrouter_v1_workspace_workflow: Optional[shared.TaskrouterV1WorkspaceWorkflow] = field(default=None)
    

@dataclass
class UpdateWorkflowResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateWorkflowResponses]] = field(default=None)
    status_code: int = field(default=None)
    
