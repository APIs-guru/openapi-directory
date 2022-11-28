from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchCustomerProfileEntityAssignmentPathParams:
    customer_profile_sid: str = field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCustomerProfileEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCustomerProfileEntityAssignmentRequest:
    path_params: FetchCustomerProfileEntityAssignmentPathParams = field()
    security: FetchCustomerProfileEntityAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCustomerProfileEntityAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_customer_profile_customer_profile_entity_assignment: Optional[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment] = field(default=None)
    
