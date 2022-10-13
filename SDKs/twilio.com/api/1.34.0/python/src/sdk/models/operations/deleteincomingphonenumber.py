from dataclasses import dataclass, field
from typing import Optional
DELETE_INCOMING_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteIncomingPhoneNumberPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIncomingPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteIncomingPhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteIncomingPhoneNumberPathParams = field(default=None)
    security: DeleteIncomingPhoneNumberSecurity = field(default=None)
    

@dataclass
class DeleteIncomingPhoneNumberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
