from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class UpdateBundlePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBundleUpdateBundleRequest:
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared.BundleEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclass
class UpdateBundleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateBundleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateBundlePathParams = field(default=None)
    request: Optional[UpdateBundleUpdateBundleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateBundleSecurity = field(default=None)
    

@dataclass
class UpdateBundleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    numbers_v2_regulatory_compliance_bundle: Optional[shared.NumbersV2RegulatoryComplianceBundle] = field(default=None)
    
