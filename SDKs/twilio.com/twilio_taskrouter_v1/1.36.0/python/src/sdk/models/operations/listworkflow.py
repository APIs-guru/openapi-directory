from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListWorkflowPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListWorkflowQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWorkflowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListWorkflowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListWorkflowPathParams = field(default=None)
    query_params: ListWorkflowQueryParams = field(default=None)
    security: ListWorkflowSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListWorkflow200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListWorkflow200ApplicationJSONListWorkflowResponse:
    meta: Optional[ListWorkflow200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    workflows: Optional[List[shared.TaskrouterV1WorkspaceWorkflow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflows' }})
    

@dataclass
class ListWorkflowResponse:
    content_type: str = field(default=None)
    list_workflow_response: Optional[ListWorkflow200ApplicationJSONListWorkflowResponse] = field(default=None)
    status_code: int = field(default=None)
    
