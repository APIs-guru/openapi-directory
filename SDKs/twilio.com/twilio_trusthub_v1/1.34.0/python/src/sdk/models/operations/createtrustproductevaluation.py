from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TRUST_PRODUCT_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateTrustProductEvaluationPathParams:
    trust_product_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTrustProductEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrustProductEvaluationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTrustProductEvaluationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTrustProductEvaluationSecurity = field(default=None)
    

@dataclass
class CreateTrustProductEvaluationResponses:
    trusthub_v1_trust_product_trust_product_evaluation: Optional[shared.TrusthubV1TrustProductTrustProductEvaluation] = field(default=None)
    

@dataclass
class CreateTrustProductEvaluationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateTrustProductEvaluationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
