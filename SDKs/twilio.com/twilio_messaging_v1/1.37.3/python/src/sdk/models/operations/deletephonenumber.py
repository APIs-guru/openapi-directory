from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_PHONE_NUMBER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class DeletePhoneNumberPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeletePhoneNumberRequest:
    path_params: DeletePhoneNumberPathParams = field()
    security: DeletePhoneNumberSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeletePhoneNumberResponse:
    content_type: str = field()
    status_code: int = field()
    
