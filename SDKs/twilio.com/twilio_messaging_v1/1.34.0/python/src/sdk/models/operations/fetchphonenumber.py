from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_PHONE_NUMBER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchPhoneNumberPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchPhoneNumberPathParams = field(default=None)
    security: FetchPhoneNumberSecurity = field(default=None)
    

@dataclass
class FetchPhoneNumberResponses:
    messaging_v1_service_phone_number: Optional[shared.MessagingV1ServicePhoneNumber] = field(default=None)
    

@dataclass
class FetchPhoneNumberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchPhoneNumberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
