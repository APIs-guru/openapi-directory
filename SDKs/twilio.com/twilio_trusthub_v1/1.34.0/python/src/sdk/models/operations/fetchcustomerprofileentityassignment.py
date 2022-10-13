from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchCustomerProfileEntityAssignmentPathParams:
    customer_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCustomerProfileEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCustomerProfileEntityAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCustomerProfileEntityAssignmentPathParams = field(default=None)
    security: FetchCustomerProfileEntityAssignmentSecurity = field(default=None)
    

@dataclass
class FetchCustomerProfileEntityAssignmentResponses:
    trusthub_v1_customer_profile_customer_profile_entity_assignment: Optional[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment] = field(default=None)
    

@dataclass
class FetchCustomerProfileEntityAssignmentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchCustomerProfileEntityAssignmentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
