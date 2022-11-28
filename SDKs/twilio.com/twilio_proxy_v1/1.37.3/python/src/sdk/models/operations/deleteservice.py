from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SERVICE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class DeleteServicePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceRequest:
    path_params: DeleteServicePathParams = field()
    security: DeleteServiceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteServiceResponse:
    content_type: str = field()
    status_code: int = field()
    
