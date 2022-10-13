from dataclasses import dataclass, field
from typing import Optional
DELETE_SERVICE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class DeleteServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteServicePathParams = field(default=None)
    security: DeleteServiceSecurity = field(default=None)
    

@dataclass
class DeleteServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
