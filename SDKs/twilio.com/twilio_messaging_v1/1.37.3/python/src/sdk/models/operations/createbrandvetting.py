from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_BRAND_VETTING_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateBrandVettingPathParams:
    brand_sid: str = field(metadata={'path_param': { 'field_name': 'BrandSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBrandVettingCreateBrandVettingRequest:
    vetting_provider: shared.BrandVettingEnumVettingProviderEnum = field(metadata={'form': { 'field_name': 'VettingProvider' }})
    vetting_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VettingId' }})
    

@dataclass
class CreateBrandVettingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBrandVettingRequest:
    path_params: CreateBrandVettingPathParams = field()
    security: CreateBrandVettingSecurity = field()
    request: Optional[CreateBrandVettingCreateBrandVettingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateBrandVettingResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_brand_registrations_brand_vetting: Optional[shared.MessagingV1BrandRegistrationsBrandVetting] = field(default=None)
    
