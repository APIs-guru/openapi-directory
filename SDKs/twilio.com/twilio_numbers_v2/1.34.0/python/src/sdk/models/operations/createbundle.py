from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateBundleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBundleRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateBundleSecurity = field(default=None)
    

@dataclass
class CreateBundleResponses:
    numbers_v2_regulatory_compliance_bundle: Optional[shared.NumbersV2RegulatoryComplianceBundle] = field(default=None)
    

@dataclass
class CreateBundleResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateBundleResponses]] = field(default=None)
    status_code: int = field(default=None)
    
