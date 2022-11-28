from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteCustomerProfileEntityAssignmentPathParams:
    customer_profile_sid: str = field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerProfileEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCustomerProfileEntityAssignmentRequest:
    path_params: DeleteCustomerProfileEntityAssignmentPathParams = field()
    security: DeleteCustomerProfileEntityAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCustomerProfileEntityAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    
