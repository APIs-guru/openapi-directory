from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_EVALUATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchEvaluationPathParams:
    bundle_sid: str = field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEvaluationRequest:
    path_params: FetchEvaluationPathParams = field()
    security: FetchEvaluationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchEvaluationResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_bundle_evaluation: Optional[shared.NumbersV2RegulatoryComplianceBundleEvaluation] = field(default=None)
    
