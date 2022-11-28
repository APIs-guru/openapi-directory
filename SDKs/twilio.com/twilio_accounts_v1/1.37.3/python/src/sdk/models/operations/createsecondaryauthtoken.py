from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SECONDARY_AUTH_TOKEN_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class CreateSecondaryAuthTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSecondaryAuthTokenRequest:
    security: CreateSecondaryAuthTokenSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSecondaryAuthTokenResponse:
    content_type: str = field()
    status_code: int = field()
    accounts_v1_secondary_auth_token: Optional[shared.AccountsV1SecondaryAuthToken] = field(default=None)
    
