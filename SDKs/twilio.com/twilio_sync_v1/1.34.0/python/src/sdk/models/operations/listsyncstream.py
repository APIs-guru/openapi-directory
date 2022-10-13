from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class ListSyncStreamPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncStreamQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSyncStreamRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSyncStreamPathParams = field(default=None)
    query_params: ListSyncStreamQueryParams = field(default=None)
    security: ListSyncStreamSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSyncStream200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSyncStream200ApplicationJSONListSyncStreamResponse:
    meta: Optional[ListSyncStream200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    streams: Optional[List[shared.SyncV1ServiceSyncStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streams' }})
    

@dataclass
class ListSyncStreamResponses:
    list_sync_stream_response: Optional[ListSyncStream200ApplicationJSONListSyncStreamResponse] = field(default=None)
    

@dataclass
class ListSyncStreamResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSyncStreamResponses]] = field(default=None)
    status_code: int = field(default=None)
    
