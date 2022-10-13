from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateTrustProductChannelEndpointAssignmentPathParams:
    trust_product_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTrustProductChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrustProductChannelEndpointAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTrustProductChannelEndpointAssignmentPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTrustProductChannelEndpointAssignmentSecurity = field(default=None)
    

@dataclass
class CreateTrustProductChannelEndpointAssignmentResponses:
    trusthub_v1_trust_product_trust_product_channel_endpoint_assignment: Optional[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment] = field(default=None)
    

@dataclass
class CreateTrustProductChannelEndpointAssignmentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateTrustProductChannelEndpointAssignmentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
