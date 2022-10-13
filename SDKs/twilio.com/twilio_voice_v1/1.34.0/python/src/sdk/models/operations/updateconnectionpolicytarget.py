from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class UpdateConnectionPolicyTargetPathParams:
    connection_policy_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConnectionPolicyTargetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConnectionPolicyTargetPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConnectionPolicyTargetSecurity = field(default=None)
    

@dataclass
class UpdateConnectionPolicyTargetResponses:
    voice_v1_connection_policy_connection_policy_target: Optional[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget] = field(default=None)
    

@dataclass
class UpdateConnectionPolicyTargetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateConnectionPolicyTargetResponses]] = field(default=None)
    status_code: int = field(default=None)
    
