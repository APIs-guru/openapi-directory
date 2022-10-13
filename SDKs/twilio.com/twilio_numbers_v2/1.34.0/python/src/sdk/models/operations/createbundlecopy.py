from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_BUNDLE_COPY_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateBundleCopyPathParams:
    bundle_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBundleCopySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBundleCopyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateBundleCopyPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateBundleCopySecurity = field(default=None)
    

@dataclass
class CreateBundleCopyResponses:
    numbers_v2_regulatory_compliance_bundle_bundle_copy: Optional[shared.NumbersV2RegulatoryComplianceBundleBundleCopy] = field(default=None)
    

@dataclass
class CreateBundleCopyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateBundleCopyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
