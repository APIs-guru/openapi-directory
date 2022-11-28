from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListSyncSyncMapItemPathParams:
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncSyncMapItemQueryParams:
    bounds: Optional[shared.SyncMapItemEnumQueryFromBoundTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Bounds', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    order: Optional[shared.SyncMapItemEnumQueryResultOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSyncSyncMapItemListSyncSyncMapItemResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSyncSyncMapItemListSyncSyncMapItemResponse:
    items: Optional[List[shared.PreviewSyncServiceSyncMapSyncMapItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListSyncSyncMapItemListSyncSyncMapItemResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListSyncSyncMapItemRequest:
    path_params: ListSyncSyncMapItemPathParams = field()
    query_params: ListSyncSyncMapItemQueryParams = field()
    security: ListSyncSyncMapItemSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSyncSyncMapItemResponse:
    content_type: str = field()
    status_code: int = field()
    list_sync_sync_map_item_response: Optional[ListSyncSyncMapItemListSyncSyncMapItemResponse] = field(default=None)
    
