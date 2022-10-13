from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DAY_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class ListDayPathParams:
    resource_type: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDayQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDaySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDayRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListDayPathParams = field(default=None)
    query_params: ListDayQueryParams = field(default=None)
    security: ListDaySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDay200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDay200ApplicationJSONListDayResponse:
    days: Optional[List[shared.BulkexportsV1ExportDay]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days' }})
    meta: Optional[ListDay200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDayResponse:
    content_type: str = field(default=None)
    list_day_response: Optional[ListDay200ApplicationJSONListDayResponse] = field(default=None)
    status_code: int = field(default=None)
    
