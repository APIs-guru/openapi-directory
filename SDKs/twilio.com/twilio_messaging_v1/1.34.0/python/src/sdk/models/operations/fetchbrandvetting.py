from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_BRAND_VETTING_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchBrandVettingPathParams:
    brand_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BrandSid', 'style': 'simple', 'explode': False }})
    brand_vetting_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BrandVettingSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBrandVettingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBrandVettingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchBrandVettingPathParams = field(default=None)
    security: FetchBrandVettingSecurity = field(default=None)
    

@dataclass
class FetchBrandVettingResponses:
    messaging_v1_brand_registrations_brand_vetting: Optional[shared.MessagingV1BrandRegistrationsBrandVetting] = field(default=None)
    

@dataclass
class FetchBrandVettingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchBrandVettingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
