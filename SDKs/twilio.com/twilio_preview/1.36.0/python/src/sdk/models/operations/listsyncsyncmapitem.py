from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListSyncSyncMapItemPathParams:
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncSyncMapItemQueryParams:
    bounds: Optional[shared.SyncMapItemEnumQueryFromBoundTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Bounds', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    order: Optional[shared.SyncMapItemEnumQueryResultOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSyncSyncMapItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSyncSyncMapItemPathParams = field(default=None)
    query_params: ListSyncSyncMapItemQueryParams = field(default=None)
    security: ListSyncSyncMapItemSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSyncSyncMapItem200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSyncSyncMapItem200ApplicationJSONListSyncSyncMapItemResponse:
    items: Optional[List[shared.PreviewSyncServiceSyncMapSyncMapItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    meta: Optional[ListSyncSyncMapItem200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListSyncSyncMapItemResponse:
    content_type: str = field(default=None)
    list_sync_sync_map_item_response: Optional[ListSyncSyncMapItem200ApplicationJSONListSyncSyncMapItemResponse] = field(default=None)
    status_code: int = field(default=None)
    
