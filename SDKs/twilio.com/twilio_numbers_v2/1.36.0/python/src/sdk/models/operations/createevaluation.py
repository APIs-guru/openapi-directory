from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_EVALUATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateEvaluationPathParams:
    bundle_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEvaluationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateEvaluationPathParams = field(default=None)
    security: CreateEvaluationSecurity = field(default=None)
    

@dataclass
class CreateEvaluationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    numbers_v2_regulatory_compliance_bundle_evaluation: Optional[shared.NumbersV2RegulatoryComplianceBundleEvaluation] = field(default=None)
    
