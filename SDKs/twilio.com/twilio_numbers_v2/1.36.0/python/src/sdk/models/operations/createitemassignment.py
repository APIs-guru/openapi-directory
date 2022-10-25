from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ITEM_ASSIGNMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateItemAssignmentPathParams:
    bundle_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateItemAssignmentCreateItemAssignmentRequest:
    object_sid: str = field(default=None, metadata={'form': { 'field_name': 'ObjectSid' }})
    

@dataclass
class CreateItemAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateItemAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateItemAssignmentPathParams = field(default=None)
    request: Optional[CreateItemAssignmentCreateItemAssignmentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateItemAssignmentSecurity = field(default=None)
    

@dataclass
class CreateItemAssignmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    numbers_v2_regulatory_compliance_bundle_item_assignment: Optional[shared.NumbersV2RegulatoryComplianceBundleItemAssignment] = field(default=None)
    
