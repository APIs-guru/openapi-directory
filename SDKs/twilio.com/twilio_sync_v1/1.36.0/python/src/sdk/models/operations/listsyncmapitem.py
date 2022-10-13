from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class ListSyncMapItemPathParams:
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncMapItemQueryParams:
    bounds: Optional[shared.SyncMapItemEnumQueryFromBoundTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Bounds', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    order: Optional[shared.SyncMapItemEnumQueryResultOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSyncMapItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSyncMapItemPathParams = field(default=None)
    query_params: ListSyncMapItemQueryParams = field(default=None)
    security: ListSyncMapItemSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSyncMapItem200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSyncMapItem200ApplicationJSONListSyncMapItemResponse:
    items: Optional[List[shared.SyncV1ServiceSyncMapSyncMapItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    meta: Optional[ListSyncMapItem200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListSyncMapItemResponse:
    content_type: str = field(default=None)
    list_sync_map_item_response: Optional[ListSyncMapItem200ApplicationJSONListSyncMapItemResponse] = field(default=None)
    status_code: int = field(default=None)
    
