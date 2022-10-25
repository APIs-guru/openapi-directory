from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SYNC_SYNC_MAP_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListSyncSyncMapPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncSyncMapQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSyncSyncMapRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSyncSyncMapPathParams = field(default=None)
    query_params: ListSyncSyncMapQueryParams = field(default=None)
    security: ListSyncSyncMapSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSyncSyncMapListSyncSyncMapResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSyncSyncMapListSyncSyncMapResponse:
    maps: Optional[List[shared.PreviewSyncServiceSyncMap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maps' }})
    meta: Optional[ListSyncSyncMapListSyncSyncMapResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListSyncSyncMapResponse:
    content_type: str = field(default=None)
    list_sync_sync_map_response: Optional[ListSyncSyncMapListSyncSyncMapResponse] = field(default=None)
    status_code: int = field(default=None)
    
