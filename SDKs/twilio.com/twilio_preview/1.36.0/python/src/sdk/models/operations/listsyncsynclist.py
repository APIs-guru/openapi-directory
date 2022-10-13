from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SYNC_SYNC_LIST_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListSyncSyncListPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncSyncListQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSyncSyncListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSyncSyncListPathParams = field(default=None)
    query_params: ListSyncSyncListQueryParams = field(default=None)
    security: ListSyncSyncListSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSyncSyncList200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSyncSyncList200ApplicationJSONListSyncSyncListResponse:
    lists: Optional[List[shared.PreviewSyncServiceSyncList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lists' }})
    meta: Optional[ListSyncSyncList200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListSyncSyncListResponse:
    content_type: str = field(default=None)
    list_sync_sync_list_response: Optional[ListSyncSyncList200ApplicationJSONListSyncSyncListResponse] = field(default=None)
    status_code: int = field(default=None)
    
