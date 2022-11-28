from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_CUSTOMER_PROFILE_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateCustomerProfileEvaluationPathParams:
    customer_profile_sid: str = field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest:
    policy_sid: str = field(metadata={'form': { 'field_name': 'PolicySid' }})
    

@dataclass
class CreateCustomerProfileEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCustomerProfileEvaluationRequest:
    path_params: CreateCustomerProfileEvaluationPathParams = field()
    security: CreateCustomerProfileEvaluationSecurity = field()
    request: Optional[CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCustomerProfileEvaluationResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_customer_profile_customer_profile_evaluation: Optional[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation] = field(default=None)
    
