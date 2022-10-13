from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateAccountSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAccountRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateAccountSecurity = field(default=None)
    

@dataclass
class CreateAccountResponses:
    api_v2010_account: Optional[shared.APIV2010Account] = field(default=None)
    

@dataclass
class CreateAccountResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateAccountResponses]] = field(default=None)
    status_code: int = field(default=None)
    
