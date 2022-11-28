from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_MAP_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncMapPermissionPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncMapPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncMapPermissionRequest:
    path_params: FetchSyncMapPermissionPathParams = field()
    security: FetchSyncMapPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncMapPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_map_sync_map_permission: Optional[shared.SyncV1ServiceSyncMapSyncMapPermission] = field(default=None)
    
