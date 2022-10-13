from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_INCOMING_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchIncomingPhoneNumberPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchIncomingPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchIncomingPhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchIncomingPhoneNumberPathParams = field(default=None)
    security: FetchIncomingPhoneNumberSecurity = field(default=None)
    

@dataclass
class FetchIncomingPhoneNumberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_incoming_phone_number: Optional[shared.APIV2010AccountIncomingPhoneNumber] = field(default=None)
    
