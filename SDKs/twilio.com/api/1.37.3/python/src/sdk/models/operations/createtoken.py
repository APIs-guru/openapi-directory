from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_TOKEN_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateTokenPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTokenCreateTokenRequest:
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreateTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTokenRequest:
    path_params: CreateTokenPathParams = field()
    security: CreateTokenSecurity = field()
    request: Optional[CreateTokenCreateTokenRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTokenResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_token: Optional[shared.APIV2010AccountToken] = field(default=None)
    
