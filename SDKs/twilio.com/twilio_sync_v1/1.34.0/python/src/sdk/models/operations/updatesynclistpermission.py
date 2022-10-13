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
class UpdateSyncListPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncListPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncListPermissionPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncListPermissionSecurity = field(default=None)
    

@dataclass
class UpdateSyncListPermissionResponses:
    sync_v1_service_sync_list_sync_list_permission: Optional[shared.SyncV1ServiceSyncListSyncListPermission] = field(default=None)
    

@dataclass
class UpdateSyncListPermissionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSyncListPermissionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
