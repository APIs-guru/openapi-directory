from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class ListAssistantQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListAssistantRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListAssistantQueryParams = field(default=None)
    security: ListAssistantSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListAssistant200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListAssistant200ApplicationJSONListAssistantResponse:
    assistants: Optional[List[shared.AutopilotV1Assistant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assistants' }})
    meta: Optional[ListAssistant200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListAssistantResponse:
    content_type: str = field(default=None)
    list_assistant_response: Optional[ListAssistant200ApplicationJSONListAssistantResponse] = field(default=None)
    status_code: int = field(default=None)
    
