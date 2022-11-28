from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchConnectAppPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConnectAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConnectAppRequest:
    path_params: FetchConnectAppPathParams = field()
    security: FetchConnectAppSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchConnectAppResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_connect_app: Optional[shared.APIV2010AccountConnectApp] = field(default=None)
    
