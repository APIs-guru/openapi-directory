from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateTrustProductEntityAssignmentPathParams:
    trust_product_sid: str = field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest:
    object_sid: str = field(metadata={'form': { 'field_name': 'ObjectSid' }})
    

@dataclass
class CreateTrustProductEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrustProductEntityAssignmentRequest:
    path_params: CreateTrustProductEntityAssignmentPathParams = field()
    security: CreateTrustProductEntityAssignmentSecurity = field()
    request: Optional[CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTrustProductEntityAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_trust_product_trust_product_entity_assignment: Optional[shared.TrusthubV1TrustProductTrustProductEntityAssignment] = field(default=None)
    
