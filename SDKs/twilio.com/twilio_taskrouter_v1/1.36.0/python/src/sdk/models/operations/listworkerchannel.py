from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_WORKER_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListWorkerChannelPathParams:
    worker_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListWorkerChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWorkerChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListWorkerChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListWorkerChannelPathParams = field(default=None)
    query_params: ListWorkerChannelQueryParams = field(default=None)
    security: ListWorkerChannelSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListWorkerChannel200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListWorkerChannel200ApplicationJSONListWorkerChannelResponse:
    channels: Optional[List[shared.TaskrouterV1WorkspaceWorkerWorkerChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    meta: Optional[ListWorkerChannel200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListWorkerChannelResponse:
    content_type: str = field(default=None)
    list_worker_channel_response: Optional[ListWorkerChannel200ApplicationJSONListWorkerChannelResponse] = field(default=None)
    status_code: int = field(default=None)
    
