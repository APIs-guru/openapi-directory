from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ITEM_ASSIGNMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchItemAssignmentPathParams:
    bundle_sid: str = field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchItemAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchItemAssignmentRequest:
    path_params: FetchItemAssignmentPathParams = field()
    security: FetchItemAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchItemAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_bundle_item_assignment: Optional[shared.NumbersV2RegulatoryComplianceBundleItemAssignment] = field(default=None)
    
