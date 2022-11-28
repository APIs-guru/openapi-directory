from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_PHONE_NUMBER_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class FetchPhoneNumberPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

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
    trunking_v1_trunk_phone_number: Optional[shared.TrunkingV1TrunkPhoneNumber] = field(default=None)
    
