from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_TASK_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListTaskReservationPathParams:
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTaskReservationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    reservation_status: Optional[shared.TaskReservationEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ReservationStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTaskReservationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListTaskReservationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListTaskReservationPathParams = field(default=None)
    query_params: ListTaskReservationQueryParams = field(default=None)
    security: ListTaskReservationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListTaskReservation200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListTaskReservation200ApplicationJSONListTaskReservationResponse:
    meta: Optional[ListTaskReservation200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    reservations: Optional[List[shared.TaskrouterV1WorkspaceTaskTaskReservation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservations' }})
    

@dataclass
class ListTaskReservationResponse:
    content_type: str = field(default=None)
    list_task_reservation_response: Optional[ListTaskReservation200ApplicationJSONListTaskReservationResponse] = field(default=None)
    status_code: int = field(default=None)
    
