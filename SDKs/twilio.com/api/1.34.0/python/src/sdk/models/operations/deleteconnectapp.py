from dataclasses import dataclass, field
from typing import Optional
DELETE_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteConnectAppPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConnectAppRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteConnectAppPathParams = field(default=None)
    security: DeleteConnectAppSecurity = field(default=None)
    

@dataclass
class DeleteConnectAppResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
