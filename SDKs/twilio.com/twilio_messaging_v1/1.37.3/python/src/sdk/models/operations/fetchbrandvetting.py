from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_BRAND_VETTING_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchBrandVettingPathParams:
    brand_sid: str = field(metadata={'path_param': { 'field_name': 'BrandSid', 'style': 'simple', 'explode': False }})
    brand_vetting_sid: str = field(metadata={'path_param': { 'field_name': 'BrandVettingSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBrandVettingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBrandVettingRequest:
    path_params: FetchBrandVettingPathParams = field()
    security: FetchBrandVettingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchBrandVettingResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_brand_registrations_brand_vetting: Optional[shared.MessagingV1BrandRegistrationsBrandVetting] = field(default=None)
    
