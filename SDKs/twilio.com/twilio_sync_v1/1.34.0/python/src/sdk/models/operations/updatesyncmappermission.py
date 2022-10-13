from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SYNC_MAP_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncMapPermissionPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncMapPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncMapPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncMapPermissionPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncMapPermissionSecurity = field(default=None)
    

@dataclass
class UpdateSyncMapPermissionResponses:
    sync_v1_service_sync_map_sync_map_permission: Optional[shared.SyncV1ServiceSyncMapSyncMapPermission] = field(default=None)
    

@dataclass
class UpdateSyncMapPermissionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSyncMapPermissionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
