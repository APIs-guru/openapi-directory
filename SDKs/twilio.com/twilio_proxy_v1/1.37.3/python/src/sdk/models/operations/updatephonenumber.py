from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_PHONE_NUMBER_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class UpdatePhoneNumberPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePhoneNumberUpdatePhoneNumberRequest:
    is_reserved: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IsReserved' }})
    

@dataclass
class UpdatePhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdatePhoneNumberRequest:
    path_params: UpdatePhoneNumberPathParams = field()
    security: UpdatePhoneNumberSecurity = field()
    request: Optional[UpdatePhoneNumberUpdatePhoneNumberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdatePhoneNumberResponse:
    content_type: str = field()
    status_code: int = field()
    proxy_v1_service_phone_number: Optional[shared.ProxyV1ServicePhoneNumber] = field(default=None)
    
