from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SYNC_LIST_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class ListSyncListPermissionPathParams:
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncListPermissionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncListPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSyncListPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSyncListPermissionPathParams = field(default=None)
    query_params: ListSyncListPermissionQueryParams = field(default=None)
    security: ListSyncListPermissionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSyncListPermission200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSyncListPermission200ApplicationJSONListSyncListPermissionResponse:
    meta: Optional[ListSyncListPermission200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    permissions: Optional[List[shared.SyncV1ServiceSyncListSyncListPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass
class ListSyncListPermissionResponses:
    list_sync_list_permission_response: Optional[ListSyncListPermission200ApplicationJSONListSyncListPermissionResponse] = field(default=None)
    

@dataclass
class ListSyncListPermissionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSyncListPermissionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
