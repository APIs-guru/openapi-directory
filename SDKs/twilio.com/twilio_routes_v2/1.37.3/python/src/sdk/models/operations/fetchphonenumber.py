from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_PHONE_NUMBER_SERVERS = [
	"https://routes.twilio.com",
]


@dataclass
class FetchPhoneNumberPathParams:
    phone_number: str = field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPhoneNumberRequest:
    path_params: FetchPhoneNumberPathParams = field()
    security: FetchPhoneNumberSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchPhoneNumberResponse:
    content_type: str = field()
    status_code: int = field()
    routes_v2_phone_number: Optional[shared.RoutesV2PhoneNumber] = field(default=None)
    
