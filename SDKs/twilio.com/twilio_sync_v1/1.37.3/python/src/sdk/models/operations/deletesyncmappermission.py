from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_MAP_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncMapPermissionPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncMapPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncMapPermissionRequest:
    path_params: DeleteSyncMapPermissionPathParams = field()
    security: DeleteSyncMapPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncMapPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    
