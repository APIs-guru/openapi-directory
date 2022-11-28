from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ITEM_ASSIGNMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class DeleteItemAssignmentPathParams:
    bundle_sid: str = field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteItemAssignmentRequest:
    path_params: DeleteItemAssignmentPathParams = field()
    security: DeleteItemAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteItemAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    
