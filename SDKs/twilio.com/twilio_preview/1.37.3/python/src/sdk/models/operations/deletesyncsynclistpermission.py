from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_SYNC_LIST_PERMISSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncSyncListPermissionPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncListPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncSyncListPermissionRequest:
    path_params: DeleteSyncSyncListPermissionPathParams = field()
    security: DeleteSyncSyncListPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncSyncListPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    
