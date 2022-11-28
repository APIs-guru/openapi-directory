from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class ListSyncStreamPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncStreamQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSyncStreamListSyncStreamResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSyncStreamListSyncStreamResponse:
    meta: Optional[ListSyncStreamListSyncStreamResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    streams: Optional[List[shared.SyncV1ServiceSyncStream]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streams') }})
    

@dataclass
class ListSyncStreamRequest:
    path_params: ListSyncStreamPathParams = field()
    query_params: ListSyncStreamQueryParams = field()
    security: ListSyncStreamSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSyncStreamResponse:
    content_type: str = field()
    status_code: int = field()
    list_sync_stream_response: Optional[ListSyncStreamListSyncStreamResponse] = field(default=None)
    
