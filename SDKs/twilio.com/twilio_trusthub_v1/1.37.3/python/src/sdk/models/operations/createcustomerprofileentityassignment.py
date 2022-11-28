from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateCustomerProfileEntityAssignmentPathParams:
    customer_profile_sid: str = field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest:
    object_sid: str = field(metadata={'form': { 'field_name': 'ObjectSid' }})
    

@dataclass
class CreateCustomerProfileEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCustomerProfileEntityAssignmentRequest:
    path_params: CreateCustomerProfileEntityAssignmentPathParams = field()
    security: CreateCustomerProfileEntityAssignmentSecurity = field()
    request: Optional[CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCustomerProfileEntityAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_customer_profile_customer_profile_entity_assignment: Optional[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment] = field(default=None)
    
