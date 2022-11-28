from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_LIST_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncListPermissionPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncListPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncListPermissionRequest:
    path_params: FetchSyncListPermissionPathParams = field()
    security: FetchSyncListPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncListPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_list_sync_list_permission: Optional[shared.SyncV1ServiceSyncListSyncListPermission] = field(default=None)
    
