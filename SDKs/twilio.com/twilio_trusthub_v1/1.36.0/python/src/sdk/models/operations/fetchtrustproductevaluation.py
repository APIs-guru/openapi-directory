from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TRUST_PRODUCT_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchTrustProductEvaluationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrustProductEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustProductEvaluationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTrustProductEvaluationPathParams = field(default=None)
    security: FetchTrustProductEvaluationSecurity = field(default=None)
    

@dataclass
class FetchTrustProductEvaluationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_trust_product_trust_product_evaluation: Optional[shared.TrusthubV1TrustProductTrustProductEvaluation] = field(default=None)
    
