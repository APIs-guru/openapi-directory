from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SYNC_DOCUMENT_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListSyncDocumentPermissionPathParams:
    document_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncDocumentPermissionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncDocumentPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSyncDocumentPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSyncDocumentPermissionPathParams = field(default=None)
    query_params: ListSyncDocumentPermissionQueryParams = field(default=None)
    security: ListSyncDocumentPermissionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSyncDocumentPermission200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSyncDocumentPermission200ApplicationJSONListSyncDocumentPermissionResponse:
    meta: Optional[ListSyncDocumentPermission200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    permissions: Optional[List[shared.PreviewSyncServiceDocumentDocumentPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass
class ListSyncDocumentPermissionResponse:
    content_type: str = field(default=None)
    list_sync_document_permission_response: Optional[ListSyncDocumentPermission200ApplicationJSONListSyncDocumentPermissionResponse] = field(default=None)
    status_code: int = field(default=None)
    
