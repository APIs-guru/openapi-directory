from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListTaskPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTaskQueryParams:
    assignment_status: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AssignmentStatus', 'style': 'form', 'explode': True }})
    evaluate_task_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EvaluateTaskAttributes', 'style': 'form', 'explode': True }})
    has_addons: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'HasAddons', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Ordering', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    priority: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Priority', 'style': 'form', 'explode': True }})
    task_queue_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueName', 'style': 'form', 'explode': True }})
    task_queue_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueSid', 'style': 'form', 'explode': True }})
    workflow_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'WorkflowName', 'style': 'form', 'explode': True }})
    workflow_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'WorkflowSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListTaskPathParams = field(default=None)
    query_params: ListTaskQueryParams = field(default=None)
    security: ListTaskSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListTaskListTaskResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListTaskListTaskResponse:
    meta: Optional[ListTaskListTaskResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    tasks: Optional[List[shared.TaskrouterV1WorkspaceTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    

@dataclass
class ListTaskResponse:
    content_type: str = field(default=None)
    list_task_response: Optional[ListTaskListTaskResponse] = field(default=None)
    status_code: int = field(default=None)
    
