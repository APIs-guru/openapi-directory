from dataclasses import dataclass, field
from typing import Optional
DELETE_SYNC_MAP_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncMapPermissionPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncMapPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncMapPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncMapPermissionPathParams = field(default=None)
    security: DeleteSyncMapPermissionSecurity = field(default=None)
    

@dataclass
class DeleteSyncMapPermissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
