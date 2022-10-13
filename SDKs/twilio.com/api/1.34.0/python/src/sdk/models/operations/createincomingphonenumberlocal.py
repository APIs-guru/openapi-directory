from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_INCOMING_PHONE_NUMBER_LOCAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateIncomingPhoneNumberLocalPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIncomingPhoneNumberLocalSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIncomingPhoneNumberLocalRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateIncomingPhoneNumberLocalPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIncomingPhoneNumberLocalSecurity = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberLocalResponses:
    api_v2010_account_incoming_phone_number_incoming_phone_number_local: Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal] = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberLocalResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateIncomingPhoneNumberLocalResponses]] = field(default=None)
    status_code: int = field(default=None)
    
