from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_BRAND_VETTING_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateBrandVettingPathParams:
    brand_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BrandSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBrandVettingRequestBodyCreateBrandVettingRequest:
    vetting_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VettingId' }})
    vetting_provider: shared.BrandVettingEnumVettingProviderEnum = field(default=None, metadata={'form': { 'field_name': 'VettingProvider' }})
    

@dataclass
class CreateBrandVettingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBrandVettingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateBrandVettingPathParams = field(default=None)
    request: Optional[CreateBrandVettingRequestBodyCreateBrandVettingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateBrandVettingSecurity = field(default=None)
    

@dataclass
class CreateBrandVettingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    messaging_v1_brand_registrations_brand_vetting: Optional[shared.MessagingV1BrandRegistrationsBrandVetting] = field(default=None)
    
