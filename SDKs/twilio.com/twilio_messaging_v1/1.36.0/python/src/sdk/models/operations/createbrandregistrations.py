from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_BRAND_REGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateBrandRegistrationsCreateBrandRegistrationsRequest:
    a2_p_profile_bundle_sid: str = field(default=None, metadata={'form': { 'field_name': 'A2PProfileBundleSid' }})
    brand_type: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BrandType' }})
    customer_profile_bundle_sid: str = field(default=None, metadata={'form': { 'field_name': 'CustomerProfileBundleSid' }})
    mock: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Mock' }})
    skip_automatic_sec_vet: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SkipAutomaticSecVet' }})
    

@dataclass
class CreateBrandRegistrationsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBrandRegistrationsRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateBrandRegistrationsCreateBrandRegistrationsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateBrandRegistrationsSecurity = field(default=None)
    

@dataclass
class CreateBrandRegistrationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    messaging_v1_brand_registrations: Optional[shared.MessagingV1BrandRegistrations] = field(default=None)
    
