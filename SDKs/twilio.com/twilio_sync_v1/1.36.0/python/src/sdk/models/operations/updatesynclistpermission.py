from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_SYNC_LIST_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncListPermissionPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncListPermissionRequestBodyUpdateSyncListPermissionRequest:
    manage: bool = field(default=None, metadata={'form': { 'field_name': 'Manage' }})
    read: bool = field(default=None, metadata={'form': { 'field_name': 'Read' }})
    write: bool = field(default=None, metadata={'form': { 'field_name': 'Write' }})
    

@dataclass
class UpdateSyncListPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncListPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncListPermissionPathParams = field(default=None)
    request: Optional[UpdateSyncListPermissionRequestBodyUpdateSyncListPermissionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncListPermissionSecurity = field(default=None)
    

@dataclass
class UpdateSyncListPermissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_sync_list_sync_list_permission: Optional[shared.SyncV1ServiceSyncListSyncListPermission] = field(default=None)
    
