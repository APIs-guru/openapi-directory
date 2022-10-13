from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandTaskPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUnderstandTaskQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUnderstandTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUnderstandTaskPathParams = field(default=None)
    query_params: ListUnderstandTaskQueryParams = field(default=None)
    security: ListUnderstandTaskSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUnderstandTask200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListUnderstandTask200ApplicationJSONListUnderstandTaskResponse:
    meta: Optional[ListUnderstandTask200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    tasks: Optional[List[shared.PreviewUnderstandAssistantTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    

@dataclass
class ListUnderstandTaskResponse:
    content_type: str = field(default=None)
    list_understand_task_response: Optional[ListUnderstandTask200ApplicationJSONListUnderstandTaskResponse] = field(default=None)
    status_code: int = field(default=None)
    
