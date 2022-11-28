from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SAFELIST_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateSafelistCreateSafelistRequest:
    phone_number: str = field(metadata={'form': { 'field_name': 'PhoneNumber' }})
    

@dataclass
class CreateSafelistSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSafelistRequest:
    security: CreateSafelistSecurity = field()
    request: Optional[CreateSafelistCreateSafelistRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSafelistResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_safelist: Optional[shared.VerifyV2Safelist] = field(default=None)
    
