from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SYNC_MAP_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class ListSyncMapPermissionPathParams:
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncMapPermissionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncMapPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSyncMapPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSyncMapPermissionPathParams = field(default=None)
    query_params: ListSyncMapPermissionQueryParams = field(default=None)
    security: ListSyncMapPermissionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSyncMapPermission200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSyncMapPermission200ApplicationJSONListSyncMapPermissionResponse:
    meta: Optional[ListSyncMapPermission200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    permissions: Optional[List[shared.SyncV1ServiceSyncMapSyncMapPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass
class ListSyncMapPermissionResponses:
    list_sync_map_permission_response: Optional[ListSyncMapPermission200ApplicationJSONListSyncMapPermissionResponse] = field(default=None)
    

@dataclass
class ListSyncMapPermissionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSyncMapPermissionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
