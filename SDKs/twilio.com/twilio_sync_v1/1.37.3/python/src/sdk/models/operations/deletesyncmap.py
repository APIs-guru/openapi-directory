from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_MAP_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncMapPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncMapRequest:
    path_params: DeleteSyncMapPathParams = field()
    security: DeleteSyncMapSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncMapResponse:
    content_type: str = field()
    status_code: int = field()
    
