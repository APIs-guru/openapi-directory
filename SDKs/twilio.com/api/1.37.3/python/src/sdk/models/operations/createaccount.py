from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateAccountCreateAccountRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateAccountSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAccountRequest:
    security: CreateAccountSecurity = field()
    request: Optional[CreateAccountCreateAccountRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateAccountResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account: Optional[shared.APIV2010Account] = field(default=None)
    
