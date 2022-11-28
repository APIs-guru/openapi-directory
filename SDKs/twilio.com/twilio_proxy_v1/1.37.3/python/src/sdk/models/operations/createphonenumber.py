from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_PHONE_NUMBER_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreatePhoneNumberPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePhoneNumberCreatePhoneNumberRequest:
    is_reserved: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IsReserved' }})
    phone_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PhoneNumber' }})
    sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Sid' }})
    

@dataclass
class CreatePhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePhoneNumberRequest:
    path_params: CreatePhoneNumberPathParams = field()
    security: CreatePhoneNumberSecurity = field()
    request: Optional[CreatePhoneNumberCreatePhoneNumberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreatePhoneNumberResponse:
    content_type: str = field()
    status_code: int = field()
    proxy_v1_service_phone_number: Optional[shared.ProxyV1ServicePhoneNumber] = field(default=None)
    
