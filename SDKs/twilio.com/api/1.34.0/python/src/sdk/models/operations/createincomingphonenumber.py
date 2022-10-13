from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_INCOMING_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateIncomingPhoneNumberPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIncomingPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIncomingPhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateIncomingPhoneNumberPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIncomingPhoneNumberSecurity = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberResponses:
    api_v2010_account_incoming_phone_number: Optional[shared.APIV2010AccountIncomingPhoneNumber] = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateIncomingPhoneNumberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
