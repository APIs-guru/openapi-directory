from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateWorkflowPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWorkflowCreateWorkflowRequest:
    configuration: str = field(metadata={'form': { 'field_name': 'Configuration' }})
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    assignment_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AssignmentCallbackUrl' }})
    fallback_assignment_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FallbackAssignmentCallbackUrl' }})
    task_reservation_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'TaskReservationTimeout' }})
    

@dataclass
class CreateWorkflowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWorkflowRequest:
    path_params: CreateWorkflowPathParams = field()
    security: CreateWorkflowSecurity = field()
    request: Optional[CreateWorkflowCreateWorkflowRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateWorkflowResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_workflow: Optional[shared.TaskrouterV1WorkspaceWorkflow] = field(default=None)
    
