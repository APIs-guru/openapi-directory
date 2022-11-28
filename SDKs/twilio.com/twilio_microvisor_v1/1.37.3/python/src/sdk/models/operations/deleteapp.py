from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_APP_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclass
class DeleteAppPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAppRequest:
    path_params: DeleteAppPathParams = field()
    security: DeleteAppSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteAppResponse:
    content_type: str = field()
    status_code: int = field()
    
