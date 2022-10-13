from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListActivityPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListActivityQueryParams:
    available: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Available', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListActivitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListActivityRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListActivityPathParams = field(default=None)
    query_params: ListActivityQueryParams = field(default=None)
    security: ListActivitySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListActivity200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListActivity200ApplicationJSONListActivityResponse:
    activities: Optional[List[shared.TaskrouterV1WorkspaceActivity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activities' }})
    meta: Optional[ListActivity200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListActivityResponses:
    list_activity_response: Optional[ListActivity200ApplicationJSONListActivityResponse] = field(default=None)
    

@dataclass
class ListActivityResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListActivityResponses]] = field(default=None)
    status_code: int = field(default=None)
    
