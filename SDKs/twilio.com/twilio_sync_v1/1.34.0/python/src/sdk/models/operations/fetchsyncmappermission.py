from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SYNC_MAP_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncMapPermissionPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncMapPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncMapPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncMapPermissionPathParams = field(default=None)
    security: FetchSyncMapPermissionSecurity = field(default=None)
    

@dataclass
class FetchSyncMapPermissionResponses:
    sync_v1_service_sync_map_sync_map_permission: Optional[shared.SyncV1ServiceSyncMapSyncMapPermission] = field(default=None)
    

@dataclass
class FetchSyncMapPermissionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSyncMapPermissionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
