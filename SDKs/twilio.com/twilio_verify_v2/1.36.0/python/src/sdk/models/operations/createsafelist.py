from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SAFELIST_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateSafelistRequestBodyCreateSafelistRequest:
    phone_number: str = field(default=None, metadata={'form': { 'field_name': 'PhoneNumber' }})
    

@dataclass
class CreateSafelistSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSafelistRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateSafelistRequestBodyCreateSafelistRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSafelistSecurity = field(default=None)
    

@dataclass
class CreateSafelistResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_safelist: Optional[shared.VerifyV2Safelist] = field(default=None)
    
