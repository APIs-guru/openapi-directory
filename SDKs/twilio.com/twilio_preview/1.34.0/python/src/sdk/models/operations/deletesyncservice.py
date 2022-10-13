from dataclasses import dataclass, field
from typing import Optional
DELETE_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncServicePathParams = field(default=None)
    security: DeleteSyncServiceSecurity = field(default=None)
    

@dataclass
class DeleteSyncServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
