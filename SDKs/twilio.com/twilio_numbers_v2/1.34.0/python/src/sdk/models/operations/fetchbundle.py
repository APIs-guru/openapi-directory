from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchBundlePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBundleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBundleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchBundlePathParams = field(default=None)
    security: FetchBundleSecurity = field(default=None)
    

@dataclass
class FetchBundleResponses:
    numbers_v2_regulatory_compliance_bundle: Optional[shared.NumbersV2RegulatoryComplianceBundle] = field(default=None)
    

@dataclass
class FetchBundleResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchBundleResponses]] = field(default=None)
    status_code: int = field(default=None)
    
