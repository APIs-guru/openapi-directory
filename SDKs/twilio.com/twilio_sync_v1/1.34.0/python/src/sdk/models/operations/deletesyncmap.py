from dataclasses import dataclass, field
from typing import Optional
DELETE_SYNC_MAP_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncMapPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncMapRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncMapPathParams = field(default=None)
    security: DeleteSyncMapSecurity = field(default=None)
    

@dataclass
class DeleteSyncMapResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
