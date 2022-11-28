from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SECONDARY_AUTH_TOKEN_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class DeleteSecondaryAuthTokenSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSecondaryAuthTokenRequest:
    security: DeleteSecondaryAuthTokenSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSecondaryAuthTokenResponse:
    content_type: str = field()
    status_code: int = field()
    
