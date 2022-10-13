from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_AUTHORIZED_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchAuthorizedConnectAppPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    connect_app_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConnectAppSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAuthorizedConnectAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAuthorizedConnectAppRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchAuthorizedConnectAppPathParams = field(default=None)
    security: FetchAuthorizedConnectAppSecurity = field(default=None)
    

@dataclass
class FetchAuthorizedConnectAppResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_authorized_connect_app: Optional[shared.APIV2010AccountAuthorizedConnectApp] = field(default=None)
    
