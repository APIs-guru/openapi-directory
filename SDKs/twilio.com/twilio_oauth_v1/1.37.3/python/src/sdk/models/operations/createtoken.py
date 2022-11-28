from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_TOKEN_SERVERS = [
	"https://oauth.twilio.com",
]


@dataclass
class CreateTokenCreateTokenRequest:
    client_sid: str = field(metadata={'form': { 'field_name': 'ClientSid' }})
    grant_type: str = field(metadata={'form': { 'field_name': 'GrantType' }})
    client_secret: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ClientSecret' }})
    code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Code' }})
    code_verifier: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CodeVerifier' }})
    device_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DeviceCode' }})
    device_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DeviceId' }})
    refresh_token: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RefreshToken' }})
    

@dataclass
class CreateTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTokenRequest:
    security: CreateTokenSecurity = field()
    request: Optional[CreateTokenCreateTokenRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTokenResponse:
    content_type: str = field()
    status_code: int = field()
    oauth_v1_token: Optional[shared.OauthV1Token] = field(default=None)
    
