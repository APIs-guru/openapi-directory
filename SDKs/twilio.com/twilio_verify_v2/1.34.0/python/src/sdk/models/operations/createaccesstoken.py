from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ACCESS_TOKEN_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateAccessTokenPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAccessTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAccessTokenRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateAccessTokenPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateAccessTokenSecurity = field(default=None)
    

@dataclass
class CreateAccessTokenResponses:
    verify_v2_service_access_token: Optional[shared.VerifyV2ServiceAccessToken] = field(default=None)
    

@dataclass
class CreateAccessTokenResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateAccessTokenResponses]] = field(default=None)
    status_code: int = field(default=None)
    
