from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_PHONE_NUMBER_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class CreatePhoneNumberPathParams:
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePhoneNumberCreatePhoneNumberRequest:
    phone_number_sid: str = field(metadata={'form': { 'field_name': 'PhoneNumberSid' }})
    

@dataclass
class CreatePhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePhoneNumberRequest:
    path_params: CreatePhoneNumberPathParams = field()
    security: CreatePhoneNumberSecurity = field()
    request: Optional[CreatePhoneNumberCreatePhoneNumberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreatePhoneNumberResponse:
    content_type: str = field()
    status_code: int = field()
    trunking_v1_trunk_phone_number: Optional[shared.TrunkingV1TrunkPhoneNumber] = field(default=None)
    
