from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteConnectionPolicyTargetPathParams:
    connection_policy_sid: str = field(metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConnectionPolicyTargetRequest:
    path_params: DeleteConnectionPolicyTargetPathParams = field()
    security: DeleteConnectionPolicyTargetSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteConnectionPolicyTargetResponse:
    content_type: str = field()
    status_code: int = field()
    
