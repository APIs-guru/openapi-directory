from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_EVALUATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchEvaluationPathParams:
    bundle_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEvaluationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchEvaluationPathParams = field(default=None)
    security: FetchEvaluationSecurity = field(default=None)
    

@dataclass
class FetchEvaluationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    numbers_v2_regulatory_compliance_bundle_evaluation: Optional[shared.NumbersV2RegulatoryComplianceBundleEvaluation] = field(default=None)
    
