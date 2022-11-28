from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteTrustProductChannelEndpointAssignmentPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTrustProductChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTrustProductChannelEndpointAssignmentRequest:
    path_params: DeleteTrustProductChannelEndpointAssignmentPathParams = field()
    security: DeleteTrustProductChannelEndpointAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteTrustProductChannelEndpointAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    
