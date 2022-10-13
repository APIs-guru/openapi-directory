from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_SYNC_SYNC_LIST_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncSyncListPermissionPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncSyncListPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncSyncListPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncSyncListPermissionPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncSyncListPermissionSecurity = field(default=None)
    

@dataclass
class UpdateSyncSyncListPermissionResponses:
    preview_sync_service_sync_list_sync_list_permission: Optional[shared.PreviewSyncServiceSyncListSyncListPermission] = field(default=None)
    

@dataclass
class UpdateSyncSyncListPermissionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSyncSyncListPermissionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
