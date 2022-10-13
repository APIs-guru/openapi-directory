from dataclasses import dataclass, field
from typing import Optional
DELETE_ITEM_ASSIGNMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class DeleteItemAssignmentPathParams:
    bundle_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteItemAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteItemAssignmentPathParams = field(default=None)
    security: DeleteItemAssignmentSecurity = field(default=None)
    

@dataclass
class DeleteItemAssignmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
