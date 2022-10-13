from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WORKER_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkerReservationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    worker_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkerReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkerReservationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkerReservationPathParams = field(default=None)
    security: FetchWorkerReservationSecurity = field(default=None)
    

@dataclass
class FetchWorkerReservationResponses:
    taskrouter_v1_workspace_worker_worker_reservation: Optional[shared.TaskrouterV1WorkspaceWorkerWorkerReservation] = field(default=None)
    

@dataclass
class FetchWorkerReservationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWorkerReservationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
