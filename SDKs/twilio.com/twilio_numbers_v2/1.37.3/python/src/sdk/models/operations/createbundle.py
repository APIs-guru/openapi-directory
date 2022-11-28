from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateBundleCreateBundleRequest:
    email: str = field(metadata={'form': { 'field_name': 'Email' }})
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    end_user_type: Optional[shared.BundleEnumEndUserTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'EndUserType' }})
    iso_country: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IsoCountry' }})
    number_type: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'NumberType' }})
    regulation_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RegulationSid' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclass
class CreateBundleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBundleRequest:
    security: CreateBundleSecurity = field()
    request: Optional[CreateBundleCreateBundleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateBundleResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_bundle: Optional[shared.NumbersV2RegulatoryComplianceBundle] = field(default=None)
    
