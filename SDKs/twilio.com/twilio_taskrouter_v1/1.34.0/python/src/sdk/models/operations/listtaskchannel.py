from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListTaskChannelPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTaskChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTaskChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListTaskChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListTaskChannelPathParams = field(default=None)
    query_params: ListTaskChannelQueryParams = field(default=None)
    security: ListTaskChannelSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListTaskChannel200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListTaskChannel200ApplicationJSONListTaskChannelResponse:
    channels: Optional[List[shared.TaskrouterV1WorkspaceTaskChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    meta: Optional[ListTaskChannel200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListTaskChannelResponses:
    list_task_channel_response: Optional[ListTaskChannel200ApplicationJSONListTaskChannelResponse] = field(default=None)
    

@dataclass
class ListTaskChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListTaskChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
