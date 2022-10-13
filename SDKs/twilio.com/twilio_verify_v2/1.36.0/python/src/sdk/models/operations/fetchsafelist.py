from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SAFELIST_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchSafelistPathParams:
    phone_number: str = field(default=None, metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSafelistSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSafelistRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSafelistPathParams = field(default=None)
    security: FetchSafelistSecurity = field(default=None)
    

@dataclass
class FetchSafelistResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_safelist: Optional[shared.VerifyV2Safelist] = field(default=None)
    
