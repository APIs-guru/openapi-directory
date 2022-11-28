from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_BRAND_REGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class UpdateBrandRegistrationsPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBrandRegistrationsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateBrandRegistrationsRequest:
    path_params: UpdateBrandRegistrationsPathParams = field()
    security: UpdateBrandRegistrationsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateBrandRegistrationsResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_brand_registrations: Optional[shared.MessagingV1BrandRegistrations] = field(default=None)
    
