from dataclasses import dataclass, field
from typing import Optional
DELETE_SECONDARY_AUTH_TOKEN_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class DeleteSecondaryAuthTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSecondaryAuthTokenRequest:
    server_url: Optional[str] = field(default=None)
    security: DeleteSecondaryAuthTokenSecurity = field(default=None)
    

@dataclass
class DeleteSecondaryAuthTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
