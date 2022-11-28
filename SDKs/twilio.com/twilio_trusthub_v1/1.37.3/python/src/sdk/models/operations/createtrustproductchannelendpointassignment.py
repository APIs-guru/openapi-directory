from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateTrustProductChannelEndpointAssignmentPathParams:
    trust_product_sid: str = field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest:
    channel_endpoint_sid: str = field(metadata={'form': { 'field_name': 'ChannelEndpointSid' }})
    channel_endpoint_type: str = field(metadata={'form': { 'field_name': 'ChannelEndpointType' }})
    

@dataclass
class CreateTrustProductChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrustProductChannelEndpointAssignmentRequest:
    path_params: CreateTrustProductChannelEndpointAssignmentPathParams = field()
    security: CreateTrustProductChannelEndpointAssignmentSecurity = field()
    request: Optional[CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTrustProductChannelEndpointAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_trust_product_trust_product_channel_endpoint_assignment: Optional[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment] = field(default=None)
    
