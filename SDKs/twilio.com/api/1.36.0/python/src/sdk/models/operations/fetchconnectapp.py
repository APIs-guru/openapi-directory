from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchConnectAppPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConnectAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConnectAppRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConnectAppPathParams = field(default=None)
    security: FetchConnectAppSecurity = field(default=None)
    

@dataclass
class FetchConnectAppResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_connect_app: Optional[shared.APIV2010AccountConnectApp] = field(default=None)
    
