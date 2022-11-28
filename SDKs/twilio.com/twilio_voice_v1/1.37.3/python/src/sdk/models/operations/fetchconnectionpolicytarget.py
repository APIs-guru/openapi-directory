from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchConnectionPolicyTargetPathParams:
    connection_policy_sid: str = field(metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConnectionPolicyTargetRequest:
    path_params: FetchConnectionPolicyTargetPathParams = field()
    security: FetchConnectionPolicyTargetSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchConnectionPolicyTargetResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_connection_policy_connection_policy_target: Optional[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget] = field(default=None)
    
