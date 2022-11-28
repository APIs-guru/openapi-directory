from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_INCOMING_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteIncomingPhoneNumberPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIncomingPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteIncomingPhoneNumberRequest:
    path_params: DeleteIncomingPhoneNumberPathParams = field()
    security: DeleteIncomingPhoneNumberSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteIncomingPhoneNumberResponse:
    content_type: str = field()
    status_code: int = field()
    
