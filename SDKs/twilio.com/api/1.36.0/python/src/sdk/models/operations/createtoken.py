from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TOKEN_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateTokenPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTokenRequestBodyCreateTokenRequest:
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreateTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTokenRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTokenPathParams = field(default=None)
    request: Optional[CreateTokenRequestBodyCreateTokenRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTokenSecurity = field(default=None)
    

@dataclass
class CreateTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_token: Optional[shared.APIV2010AccountToken] = field(default=None)
    
