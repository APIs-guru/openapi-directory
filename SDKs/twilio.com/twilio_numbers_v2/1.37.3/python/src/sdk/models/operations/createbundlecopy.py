from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_BUNDLE_COPY_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateBundleCopyPathParams:
    bundle_sid: str = field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBundleCopyCreateBundleCopyRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateBundleCopySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBundleCopyRequest:
    path_params: CreateBundleCopyPathParams = field()
    security: CreateBundleCopySecurity = field()
    request: Optional[CreateBundleCopyCreateBundleCopyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateBundleCopyResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_bundle_bundle_copy: Optional[shared.NumbersV2RegulatoryComplianceBundleBundleCopy] = field(default=None)
    
