from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListWorkerPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListWorkerQueryParams:
    activity_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ActivityName', 'style': 'form', 'explode': True }})
    activity_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ActivitySid', 'style': 'form', 'explode': True }})
    available: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Available', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Ordering', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    target_workers_expression: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TargetWorkersExpression', 'style': 'form', 'explode': True }})
    task_queue_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueName', 'style': 'form', 'explode': True }})
    task_queue_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWorkerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListWorkerListWorkerResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListWorkerListWorkerResponse:
    meta: Optional[ListWorkerListWorkerResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    workers: Optional[List[shared.TaskrouterV1WorkspaceWorker]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workers') }})
    

@dataclass
class ListWorkerRequest:
    path_params: ListWorkerPathParams = field()
    query_params: ListWorkerQueryParams = field()
    security: ListWorkerSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListWorkerResponse:
    content_type: str = field()
    status_code: int = field()
    list_worker_response: Optional[ListWorkerListWorkerResponse] = field(default=None)
    
