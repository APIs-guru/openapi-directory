from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WORKER_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateWorkerReservationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    worker_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkerReservationHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateWorkerReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWorkerReservationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWorkerReservationPathParams = field(default=None)
    headers: UpdateWorkerReservationHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWorkerReservationSecurity = field(default=None)
    

@dataclass
class UpdateWorkerReservationResponses:
    taskrouter_v1_workspace_worker_worker_reservation: Optional[shared.TaskrouterV1WorkspaceWorkerWorkerReservation] = field(default=None)
    

@dataclass
class UpdateWorkerReservationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateWorkerReservationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
