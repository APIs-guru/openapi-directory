from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CUSTOMER_PROFILE_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateCustomerProfileEvaluationPathParams:
    customer_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomerProfileEvaluationRequestBodyCreateCustomerProfileEvaluationRequest:
    policy_sid: str = field(default=None, metadata={'form': { 'field_name': 'PolicySid' }})
    

@dataclass
class CreateCustomerProfileEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCustomerProfileEvaluationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateCustomerProfileEvaluationPathParams = field(default=None)
    request: Optional[CreateCustomerProfileEvaluationRequestBodyCreateCustomerProfileEvaluationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCustomerProfileEvaluationSecurity = field(default=None)
    

@dataclass
class CreateCustomerProfileEvaluationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_customer_profile_customer_profile_evaluation: Optional[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation] = field(default=None)
    
