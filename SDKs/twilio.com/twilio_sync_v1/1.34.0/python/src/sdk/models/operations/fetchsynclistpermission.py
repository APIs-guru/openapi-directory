from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_SYNC_LIST_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncListPermissionPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncListPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncListPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncListPermissionPathParams = field(default=None)
    security: FetchSyncListPermissionSecurity = field(default=None)
    

@dataclass
class FetchSyncListPermissionResponses:
    sync_v1_service_sync_list_sync_list_permission: Optional[shared.SyncV1ServiceSyncListSyncListPermission] = field(default=None)
    

@dataclass
class FetchSyncListPermissionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSyncListPermissionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
