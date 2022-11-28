from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteCustomerProfileChannelEndpointAssignmentPathParams:
    customer_profile_sid: str = field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerProfileChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCustomerProfileChannelEndpointAssignmentRequest:
    path_params: DeleteCustomerProfileChannelEndpointAssignmentPathParams = field()
    security: DeleteCustomerProfileChannelEndpointAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCustomerProfileChannelEndpointAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    
