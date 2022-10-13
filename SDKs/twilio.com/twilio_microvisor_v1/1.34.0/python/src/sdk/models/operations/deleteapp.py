from dataclasses import dataclass, field
from typing import Optional
DELETE_APP_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclass
class DeleteAppPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAppRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteAppPathParams = field(default=None)
    security: DeleteAppSecurity = field(default=None)
    

@dataclass
class DeleteAppResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
