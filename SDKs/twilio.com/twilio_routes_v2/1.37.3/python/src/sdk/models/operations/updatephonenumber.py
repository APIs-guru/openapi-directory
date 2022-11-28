from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_PHONE_NUMBER_SERVERS = [
	"https://routes.twilio.com",
]


@dataclass
class UpdatePhoneNumberPathParams:
    phone_number: str = field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePhoneNumberUpdatePhoneNumberRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    voice_region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceRegion' }})
    

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
    routes_v2_phone_number: Optional[shared.RoutesV2PhoneNumber] = field(default=None)
    
