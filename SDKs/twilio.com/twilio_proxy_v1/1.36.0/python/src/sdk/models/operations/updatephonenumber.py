from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_PHONE_NUMBER_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class UpdatePhoneNumberPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePhoneNumberRequestBodyUpdatePhoneNumberRequest:
    is_reserved: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IsReserved' }})
    

@dataclass
class UpdatePhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdatePhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdatePhoneNumberPathParams = field(default=None)
    request: Optional[UpdatePhoneNumberRequestBodyUpdatePhoneNumberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdatePhoneNumberSecurity = field(default=None)
    

@dataclass
class UpdatePhoneNumberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    proxy_v1_service_phone_number: Optional[shared.ProxyV1ServicePhoneNumber] = field(default=None)
    
