from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_ACCESS_TOKEN_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateAccessTokenPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAccessTokenCreateAccessTokenRequest:
    factor_friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FactorFriendlyName' }})
    factor_type: shared.AccessTokenEnumFactorTypesEnum = field(default=None, metadata={'form': { 'field_name': 'FactorType' }})
    identity: str = field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreateAccessTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAccessTokenRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateAccessTokenPathParams = field(default=None)
    request: Optional[CreateAccessTokenCreateAccessTokenRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateAccessTokenSecurity = field(default=None)
    

@dataclass
class CreateAccessTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_access_token: Optional[shared.VerifyV2ServiceAccessToken] = field(default=None)
    
