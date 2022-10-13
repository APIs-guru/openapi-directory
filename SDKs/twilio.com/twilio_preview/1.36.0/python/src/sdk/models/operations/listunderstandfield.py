from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_UNDERSTAND_FIELD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandFieldPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUnderstandFieldQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandFieldSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUnderstandFieldRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUnderstandFieldPathParams = field(default=None)
    query_params: ListUnderstandFieldQueryParams = field(default=None)
    security: ListUnderstandFieldSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUnderstandField200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListUnderstandField200ApplicationJSONListUnderstandFieldResponse:
    fields: Optional[List[shared.PreviewUnderstandAssistantTaskField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    meta: Optional[ListUnderstandField200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListUnderstandFieldResponse:
    content_type: str = field(default=None)
    list_understand_field_response: Optional[ListUnderstandField200ApplicationJSONListUnderstandFieldResponse] = field(default=None)
    status_code: int = field(default=None)
    
