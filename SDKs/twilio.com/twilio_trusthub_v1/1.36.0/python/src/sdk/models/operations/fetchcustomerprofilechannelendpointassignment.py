from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchCustomerProfileChannelEndpointAssignmentPathParams:
    customer_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCustomerProfileChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCustomerProfileChannelEndpointAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCustomerProfileChannelEndpointAssignmentPathParams = field(default=None)
    security: FetchCustomerProfileChannelEndpointAssignmentSecurity = field(default=None)
    

@dataclass
class FetchCustomerProfileChannelEndpointAssignmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment: Optional[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment] = field(default=None)
    
