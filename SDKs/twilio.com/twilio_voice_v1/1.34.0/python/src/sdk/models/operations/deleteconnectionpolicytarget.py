from dataclasses import dataclass, field
from typing import Optional
DELETE_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteConnectionPolicyTargetPathParams:
    connection_policy_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConnectionPolicyTargetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteConnectionPolicyTargetPathParams = field(default=None)
    security: DeleteConnectionPolicyTargetSecurity = field(default=None)
    

@dataclass
class DeleteConnectionPolicyTargetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
