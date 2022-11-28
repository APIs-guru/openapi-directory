from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateWorkflowPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkflowUpdateWorkflowRequest:
    assignment_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AssignmentCallbackUrl' }})
    configuration: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration' }})
    fallback_assignment_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FallbackAssignmentCallbackUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    re_evaluate_tasks: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ReEvaluateTasks' }})
    task_reservation_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'TaskReservationTimeout' }})
    

@dataclass
class UpdateWorkflowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWorkflowRequest:
    path_params: UpdateWorkflowPathParams = field()
    security: UpdateWorkflowSecurity = field()
    request: Optional[UpdateWorkflowUpdateWorkflowRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateWorkflowResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_workflow: Optional[shared.TaskrouterV1WorkspaceWorkflow] = field(default=None)
    
