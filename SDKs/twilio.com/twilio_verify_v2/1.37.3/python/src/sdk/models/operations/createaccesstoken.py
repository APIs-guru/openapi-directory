from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_ACCESS_TOKEN_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateAccessTokenPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAccessTokenCreateAccessTokenRequest:
    factor_type: shared.AccessTokenEnumFactorTypesEnum = field(metadata={'form': { 'field_name': 'FactorType' }})
    identity: str = field(metadata={'form': { 'field_name': 'Identity' }})
    factor_friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FactorFriendlyName' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreateAccessTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAccessTokenRequest:
    path_params: CreateAccessTokenPathParams = field()
    security: CreateAccessTokenSecurity = field()
    request: Optional[CreateAccessTokenCreateAccessTokenRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_access_token: Optional[shared.VerifyV2ServiceAccessToken] = field(default=None)
    
