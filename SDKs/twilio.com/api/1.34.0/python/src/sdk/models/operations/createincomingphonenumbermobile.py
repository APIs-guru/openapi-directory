from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_INCOMING_PHONE_NUMBER_MOBILE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateIncomingPhoneNumberMobilePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIncomingPhoneNumberMobileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIncomingPhoneNumberMobileRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateIncomingPhoneNumberMobilePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIncomingPhoneNumberMobileSecurity = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberMobileResponses:
    api_v2010_account_incoming_phone_number_incoming_phone_number_mobile: Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile] = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberMobileResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateIncomingPhoneNumberMobileResponses]] = field(default=None)
    status_code: int = field(default=None)
    
