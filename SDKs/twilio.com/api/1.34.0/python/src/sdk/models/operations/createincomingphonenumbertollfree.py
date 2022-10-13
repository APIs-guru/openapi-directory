from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_INCOMING_PHONE_NUMBER_TOLL_FREE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateIncomingPhoneNumberTollFreePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIncomingPhoneNumberTollFreeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIncomingPhoneNumberTollFreeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateIncomingPhoneNumberTollFreePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIncomingPhoneNumberTollFreeSecurity = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberTollFreeResponses:
    api_v2010_account_incoming_phone_number_incoming_phone_number_toll_free: Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree] = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberTollFreeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateIncomingPhoneNumberTollFreeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
