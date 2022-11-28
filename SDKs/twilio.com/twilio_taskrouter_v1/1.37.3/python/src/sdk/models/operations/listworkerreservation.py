from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_WORKER_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListWorkerReservationPathParams:
    worker_sid: str = field(metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListWorkerReservationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    reservation_status: Optional[shared.WorkerReservationEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ReservationStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWorkerReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListWorkerReservationListWorkerReservationResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListWorkerReservationListWorkerReservationResponse:
    meta: Optional[ListWorkerReservationListWorkerReservationResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    reservations: Optional[List[shared.TaskrouterV1WorkspaceWorkerWorkerReservation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations') }})
    

@dataclass
class ListWorkerReservationRequest:
    path_params: ListWorkerReservationPathParams = field()
    query_params: ListWorkerReservationQueryParams = field()
    security: ListWorkerReservationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListWorkerReservationResponse:
    content_type: str = field()
    status_code: int = field()
    list_worker_reservation_response: Optional[ListWorkerReservationListWorkerReservationResponse] = field(default=None)
    
