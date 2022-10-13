from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchTrustProductEntityAssignmentPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrustProductEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustProductEntityAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTrustProductEntityAssignmentPathParams = field(default=None)
    security: FetchTrustProductEntityAssignmentSecurity = field(default=None)
    

@dataclass
class FetchTrustProductEntityAssignmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_trust_product_trust_product_entity_assignment: Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment] = field(default=None)
    
