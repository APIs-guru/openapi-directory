from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteConnectionPolicyPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectionPolicySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConnectionPolicyRequest:
    path_params: DeleteConnectionPolicyPathParams = field()
    security: DeleteConnectionPolicySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteConnectionPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    
