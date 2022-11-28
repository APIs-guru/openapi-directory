from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_SYNC_MAP_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncSyncMapPermissionPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncSyncMapPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncSyncMapPermissionRequest:
    path_params: FetchSyncSyncMapPermissionPathParams = field()
    security: FetchSyncSyncMapPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncSyncMapPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_sync_map_sync_map_permission: Optional[shared.PreviewSyncServiceSyncMapSyncMapPermission] = field(default=None)
    
