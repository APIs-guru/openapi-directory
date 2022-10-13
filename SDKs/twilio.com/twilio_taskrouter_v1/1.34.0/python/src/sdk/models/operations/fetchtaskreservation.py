from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TASK_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchTaskReservationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskReservationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTaskReservationPathParams = field(default=None)
    security: FetchTaskReservationSecurity = field(default=None)
    

@dataclass
class FetchTaskReservationResponses:
    taskrouter_v1_workspace_task_task_reservation: Optional[shared.TaskrouterV1WorkspaceTaskTaskReservation] = field(default=None)
    

@dataclass
class FetchTaskReservationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTaskReservationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
