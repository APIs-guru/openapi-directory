from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_LIST_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncListPermissionPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncListPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncListPermissionRequest:
    path_params: DeleteSyncListPermissionPathParams = field()
    security: DeleteSyncListPermissionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncListPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    
