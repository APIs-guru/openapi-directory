from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateCustomerProfileChannelEndpointAssignmentPathParams:
    customer_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomerProfileChannelEndpointAssignmentRequestBodyCreateCustomerProfileChannelEndpointAssignmentRequest:
    channel_endpoint_sid: str = field(default=None, metadata={'form': { 'field_name': 'ChannelEndpointSid' }})
    channel_endpoint_type: str = field(default=None, metadata={'form': { 'field_name': 'ChannelEndpointType' }})
    

@dataclass
class CreateCustomerProfileChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCustomerProfileChannelEndpointAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateCustomerProfileChannelEndpointAssignmentPathParams = field(default=None)
    request: Optional[CreateCustomerProfileChannelEndpointAssignmentRequestBodyCreateCustomerProfileChannelEndpointAssignmentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCustomerProfileChannelEndpointAssignmentSecurity = field(default=None)
    

@dataclass
class CreateCustomerProfileChannelEndpointAssignmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment: Optional[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment] = field(default=None)
    
