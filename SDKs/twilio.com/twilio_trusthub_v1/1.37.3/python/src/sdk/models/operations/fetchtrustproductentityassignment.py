from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchTrustProductEntityAssignmentPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrustProductEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustProductEntityAssignmentRequest:
    path_params: FetchTrustProductEntityAssignmentPathParams = field()
    security: FetchTrustProductEntityAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTrustProductEntityAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_trust_product_trust_product_entity_assignment: Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment] = field(default=None)
    
