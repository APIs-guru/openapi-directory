from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CUSTOMER_PROFILE_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchCustomerProfileEvaluationPathParams:
    customer_profile_sid: str = field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCustomerProfileEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCustomerProfileEvaluationRequest:
    path_params: FetchCustomerProfileEvaluationPathParams = field()
    security: FetchCustomerProfileEvaluationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCustomerProfileEvaluationResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_customer_profile_customer_profile_evaluation: Optional[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation] = field(default=None)
    
