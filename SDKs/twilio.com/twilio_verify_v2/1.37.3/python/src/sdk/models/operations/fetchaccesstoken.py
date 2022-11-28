from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ACCESS_TOKEN_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchAccessTokenPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAccessTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAccessTokenRequest:
    path_params: FetchAccessTokenPathParams = field()
    security: FetchAccessTokenSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_access_token: Optional[shared.VerifyV2ServiceAccessToken] = field(default=None)
    
