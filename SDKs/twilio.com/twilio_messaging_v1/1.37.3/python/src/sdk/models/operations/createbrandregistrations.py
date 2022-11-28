from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_BRAND_REGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateBrandRegistrationsCreateBrandRegistrationsRequest:
    a2_p_profile_bundle_sid: str = field(metadata={'form': { 'field_name': 'A2PProfileBundleSid' }})
    customer_profile_bundle_sid: str = field(metadata={'form': { 'field_name': 'CustomerProfileBundleSid' }})
    brand_type: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BrandType' }})
    mock: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Mock' }})
    skip_automatic_sec_vet: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SkipAutomaticSecVet' }})
    

@dataclass
class CreateBrandRegistrationsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBrandRegistrationsRequest:
    security: CreateBrandRegistrationsSecurity = field()
    request: Optional[CreateBrandRegistrationsCreateBrandRegistrationsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateBrandRegistrationsResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_brand_registrations: Optional[shared.MessagingV1BrandRegistrations] = field(default=None)
    
