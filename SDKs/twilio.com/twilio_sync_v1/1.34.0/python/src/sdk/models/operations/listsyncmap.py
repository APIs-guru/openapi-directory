from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SYNC_MAP_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class ListSyncMapPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncMapQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSyncMapRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSyncMapPathParams = field(default=None)
    query_params: ListSyncMapQueryParams = field(default=None)
    security: ListSyncMapSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSyncMap200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSyncMap200ApplicationJSONListSyncMapResponse:
    maps: Optional[List[shared.SyncV1ServiceSyncMap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maps' }})
    meta: Optional[ListSyncMap200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListSyncMapResponses:
    list_sync_map_response: Optional[ListSyncMap200ApplicationJSONListSyncMapResponse] = field(default=None)
    

@dataclass
class ListSyncMapResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSyncMapResponses]] = field(default=None)
    status_code: int = field(default=None)
    
