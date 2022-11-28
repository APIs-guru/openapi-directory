from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SAFELIST_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchSafelistPathParams:
    phone_number: str = field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSafelistSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSafelistRequest:
    path_params: FetchSafelistPathParams = field()
    security: FetchSafelistSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSafelistResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_safelist: Optional[shared.VerifyV2Safelist] = field(default=None)
    
