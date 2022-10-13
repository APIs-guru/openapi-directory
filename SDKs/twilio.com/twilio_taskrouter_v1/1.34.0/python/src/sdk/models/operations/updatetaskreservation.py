from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_TASK_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateTaskReservationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskReservationHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateTaskReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskReservationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTaskReservationPathParams = field(default=None)
    headers: UpdateTaskReservationHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTaskReservationSecurity = field(default=None)
    

@dataclass
class UpdateTaskReservationResponses:
    taskrouter_v1_workspace_task_task_reservation: Optional[shared.TaskrouterV1WorkspaceTaskTaskReservation] = field(default=None)
    

@dataclass
class UpdateTaskReservationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateTaskReservationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
