from dataclasses import dataclass, field
from typing import Optional
DELETE_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteCustomerProfileEntityAssignmentPathParams:
    customer_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerProfileEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCustomerProfileEntityAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCustomerProfileEntityAssignmentPathParams = field(default=None)
    security: DeleteCustomerProfileEntityAssignmentSecurity = field(default=None)
    

@dataclass
class DeleteCustomerProfileEntityAssignmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
