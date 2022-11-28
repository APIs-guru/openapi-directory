from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_WORKER_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListWorkerChannelPathParams:
    worker_sid: str = field(metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListWorkerChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWorkerChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListWorkerChannelListWorkerChannelResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListWorkerChannelListWorkerChannelResponse:
    channels: Optional[List[shared.TaskrouterV1WorkspaceWorkerWorkerChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    meta: Optional[ListWorkerChannelListWorkerChannelResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListWorkerChannelRequest:
    path_params: ListWorkerChannelPathParams = field()
    query_params: ListWorkerChannelQueryParams = field()
    security: ListWorkerChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListWorkerChannelResponse:
    content_type: str = field()
    status_code: int = field()
    list_worker_channel_response: Optional[ListWorkerChannelListWorkerChannelResponse] = field(default=None)
    
