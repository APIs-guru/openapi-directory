from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SYNC_LIST_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncListPermissionPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncListPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncListPermissionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncListPermissionPathParams = field(default=None)
    security: DeleteSyncListPermissionSecurity = field(default=None)
    

@dataclass
class DeleteSyncListPermissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
