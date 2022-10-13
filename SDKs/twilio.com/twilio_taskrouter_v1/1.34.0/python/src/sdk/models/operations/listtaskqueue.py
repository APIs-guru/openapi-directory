from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListTaskQueuePathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTaskQueueQueryParams:
    evaluate_worker_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EvaluateWorkerAttributes', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    worker_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'WorkerSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTaskQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListTaskQueueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListTaskQueuePathParams = field(default=None)
    query_params: ListTaskQueueQueryParams = field(default=None)
    security: ListTaskQueueSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListTaskQueue200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListTaskQueue200ApplicationJSONListTaskQueueResponse:
    meta: Optional[ListTaskQueue200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    task_queues: Optional[List[shared.TaskrouterV1WorkspaceTaskQueue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_queues' }})
    

@dataclass
class ListTaskQueueResponses:
    list_task_queue_response: Optional[ListTaskQueue200ApplicationJSONListTaskQueueResponse] = field(default=None)
    

@dataclass
class ListTaskQueueResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListTaskQueueResponses]] = field(default=None)
    status_code: int = field(default=None)
    
