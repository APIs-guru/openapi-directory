from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WORKER_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkerReservationPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    worker_sid: str = field(metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkerReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkerReservationRequest:
    path_params: FetchWorkerReservationPathParams = field()
    security: FetchWorkerReservationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWorkerReservationResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_worker_worker_reservation: Optional[shared.TaskrouterV1WorkspaceWorkerWorkerReservation] = field(default=None)
    
