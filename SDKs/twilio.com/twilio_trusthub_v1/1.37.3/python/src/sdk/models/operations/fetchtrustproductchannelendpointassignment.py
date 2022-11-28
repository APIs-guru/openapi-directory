from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchTrustProductChannelEndpointAssignmentPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrustProductChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustProductChannelEndpointAssignmentRequest:
    path_params: FetchTrustProductChannelEndpointAssignmentPathParams = field()
    security: FetchTrustProductChannelEndpointAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTrustProductChannelEndpointAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_trust_product_trust_product_channel_endpoint_assignment: Optional[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment] = field(default=None)
    
