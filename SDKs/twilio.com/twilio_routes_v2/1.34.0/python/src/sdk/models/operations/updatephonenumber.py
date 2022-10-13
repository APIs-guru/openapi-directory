from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_PHONE_NUMBER_SERVERS = [
	"https://routes.twilio.com",
]


@dataclass
class UpdatePhoneNumberPathParams:
    phone_number: str = field(default=None, metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdatePhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdatePhoneNumberPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdatePhoneNumberSecurity = field(default=None)
    

@dataclass
class UpdatePhoneNumberResponses:
    routes_v2_phone_number: Optional[shared.RoutesV2PhoneNumber] = field(default=None)
    

@dataclass
class UpdatePhoneNumberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdatePhoneNumberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
