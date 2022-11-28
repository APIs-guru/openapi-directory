from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListSyncSyncListItemPathParams:
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncSyncListItemQueryParams:
    bounds: Optional[shared.SyncListItemEnumQueryFromBoundTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Bounds', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    order: Optional[shared.SyncListItemEnumQueryResultOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSyncSyncListItemListSyncSyncListItemResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSyncSyncListItemListSyncSyncListItemResponse:
    items: Optional[List[shared.PreviewSyncServiceSyncListSyncListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListSyncSyncListItemListSyncSyncListItemResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListSyncSyncListItemRequest:
    path_params: ListSyncSyncListItemPathParams = field()
    query_params: ListSyncSyncListItemQueryParams = field()
    security: ListSyncSyncListItemSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSyncSyncListItemResponse:
    content_type: str = field()
    status_code: int = field()
    list_sync_sync_list_item_response: Optional[ListSyncSyncListItemListSyncSyncListItemResponse] = field(default=None)
    
