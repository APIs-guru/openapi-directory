from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_BRAND_REGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchBrandRegistrationsPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBrandRegistrationsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBrandRegistrationsRequest:
    path_params: FetchBrandRegistrationsPathParams = field()
    security: FetchBrandRegistrationsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchBrandRegistrationsResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_brand_registrations: Optional[shared.MessagingV1BrandRegistrations] = field(default=None)
    
