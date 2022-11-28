from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_EVALUATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateEvaluationPathParams:
    bundle_sid: str = field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEvaluationRequest:
    path_params: CreateEvaluationPathParams = field()
    security: CreateEvaluationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateEvaluationResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_bundle_evaluation: Optional[shared.NumbersV2RegulatoryComplianceBundleEvaluation] = field(default=None)
    
