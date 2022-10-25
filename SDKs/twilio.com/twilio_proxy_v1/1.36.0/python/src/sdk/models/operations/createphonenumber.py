from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_PHONE_NUMBER_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreatePhoneNumberPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePhoneNumberCreatePhoneNumberRequest:
    is_reserved: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IsReserved' }})
    phone_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PhoneNumber' }})
    sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Sid' }})
    

@dataclass
class CreatePhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreatePhoneNumberPathParams = field(default=None)
    request: Optional[CreatePhoneNumberCreatePhoneNumberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreatePhoneNumberSecurity = field(default=None)
    

@dataclass
class CreatePhoneNumberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    proxy_v1_service_phone_number: Optional[shared.ProxyV1ServicePhoneNumber] = field(default=None)
    
