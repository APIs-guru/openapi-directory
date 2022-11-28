from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_TASK_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListTaskReservationPathParams:
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTaskReservationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    reservation_status: Optional[shared.TaskReservationEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ReservationStatus', 'style': 'form', 'explode': True }})
    worker_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'WorkerSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTaskReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListTaskReservationListTaskReservationResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListTaskReservationListTaskReservationResponse:
    meta: Optional[ListTaskReservationListTaskReservationResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    reservations: Optional[List[shared.TaskrouterV1WorkspaceTaskTaskReservation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations') }})
    

@dataclass
class ListTaskReservationRequest:
    path_params: ListTaskReservationPathParams = field()
    query_params: ListTaskReservationQueryParams = field()
    security: ListTaskReservationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListTaskReservationResponse:
    content_type: str = field()
    status_code: int = field()
    list_task_reservation_response: Optional[ListTaskReservationListTaskReservationResponse] = field(default=None)
    
