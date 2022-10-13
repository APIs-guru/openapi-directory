from dataclasses import dataclass, field
from typing import Optional
DELETE_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteConnectionPolicyPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectionPolicySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConnectionPolicyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteConnectionPolicyPathParams = field(default=None)
    security: DeleteConnectionPolicySecurity = field(default=None)
    

@dataclass
class DeleteConnectionPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
