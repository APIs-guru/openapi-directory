from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandTaskPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUnderstandTaskQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUnderstandTaskListUnderstandTaskResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListUnderstandTaskListUnderstandTaskResponse:
    meta: Optional[ListUnderstandTaskListUnderstandTaskResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    tasks: Optional[List[shared.PreviewUnderstandAssistantTask]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    

@dataclass
class ListUnderstandTaskRequest:
    path_params: ListUnderstandTaskPathParams = field()
    query_params: ListUnderstandTaskQueryParams = field()
    security: ListUnderstandTaskSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUnderstandTaskResponse:
    content_type: str = field()
    status_code: int = field()
    list_understand_task_response: Optional[ListUnderstandTaskListUnderstandTaskResponse] = field(default=None)
    
