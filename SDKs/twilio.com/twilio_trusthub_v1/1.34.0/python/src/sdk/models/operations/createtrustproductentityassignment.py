from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateTrustProductEntityAssignmentPathParams:
    trust_product_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTrustProductEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrustProductEntityAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTrustProductEntityAssignmentPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTrustProductEntityAssignmentSecurity = field(default=None)
    

@dataclass
class CreateTrustProductEntityAssignmentResponses:
    trusthub_v1_trust_product_trust_product_entity_assignment: Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment] = field(default=None)
    

@dataclass
class CreateTrustProductEntityAssignmentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateTrustProductEntityAssignmentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
