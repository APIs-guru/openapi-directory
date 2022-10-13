from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_WORKER_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListWorkerReservationPathParams:
    worker_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListWorkerReservationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    reservation_status: Optional[shared.WorkerReservationEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ReservationStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWorkerReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListWorkerReservationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListWorkerReservationPathParams = field(default=None)
    query_params: ListWorkerReservationQueryParams = field(default=None)
    security: ListWorkerReservationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListWorkerReservation200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListWorkerReservation200ApplicationJSONListWorkerReservationResponse:
    meta: Optional[ListWorkerReservation200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    reservations: Optional[List[shared.TaskrouterV1WorkspaceWorkerWorkerReservation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservations' }})
    

@dataclass
class ListWorkerReservationResponse:
    content_type: str = field(default=None)
    list_worker_reservation_response: Optional[ListWorkerReservation200ApplicationJSONListWorkerReservationResponse] = field(default=None)
    status_code: int = field(default=None)
    
