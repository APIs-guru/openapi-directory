from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncServicePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncServiceRequest:
    path_params: DeleteSyncServicePathParams = field()
    security: DeleteSyncServiceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncServiceResponse:
    content_type: str = field()
    status_code: int = field()
    
