from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_INCOMING_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateIncomingPhoneNumberPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIncomingPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateIncomingPhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateIncomingPhoneNumberPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateIncomingPhoneNumberSecurity = field(default=None)
    

@dataclass
class UpdateIncomingPhoneNumberResponses:
    api_v2010_account_incoming_phone_number: Optional[shared.APIV2010AccountIncomingPhoneNumber] = field(default=None)
    

@dataclass
class UpdateIncomingPhoneNumberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateIncomingPhoneNumberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
