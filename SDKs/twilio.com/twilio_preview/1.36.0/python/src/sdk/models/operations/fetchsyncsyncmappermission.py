from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SYNC_SYNC_MAP_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncSyncMapPermissionPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncSyncMapPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncSyncMapPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncSyncMapPermissionPathParams = field(default=None)
    security: FetchSyncSyncMapPermissionSecurity = field(default=None)
    

@dataclass
class FetchSyncSyncMapPermissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_sync_map_sync_map_permission: Optional[shared.PreviewSyncServiceSyncMapSyncMapPermission] = field(default=None)
    
