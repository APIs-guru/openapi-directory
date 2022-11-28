from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_WORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListWorkflowPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListWorkflowQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWorkflowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListWorkflowListWorkflowResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListWorkflowListWorkflowResponse:
    meta: Optional[ListWorkflowListWorkflowResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    workflows: Optional[List[shared.TaskrouterV1WorkspaceWorkflow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflows') }})
    

@dataclass
class ListWorkflowRequest:
    path_params: ListWorkflowPathParams = field()
    query_params: ListWorkflowQueryParams = field()
    security: ListWorkflowSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListWorkflowResponse:
    content_type: str = field()
    status_code: int = field()
    list_workflow_response: Optional[ListWorkflowListWorkflowResponse] = field(default=None)
    
