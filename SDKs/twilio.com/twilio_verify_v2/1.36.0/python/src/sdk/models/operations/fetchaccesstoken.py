from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ACCESS_TOKEN_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchAccessTokenPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAccessTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAccessTokenRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchAccessTokenPathParams = field(default=None)
    security: FetchAccessTokenSecurity = field(default=None)
    

@dataclass
class FetchAccessTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_access_token: Optional[shared.VerifyV2ServiceAccessToken] = field(default=None)
    
