from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchBundlePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBundleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBundleRequest:
    path_params: FetchBundlePathParams = field()
    security: FetchBundleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchBundleResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_bundle: Optional[shared.NumbersV2RegulatoryComplianceBundle] = field(default=None)
    
