from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class UpdateConnectionPolicyPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConnectionPolicyUpdateConnectionPolicyRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateConnectionPolicySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConnectionPolicyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConnectionPolicyPathParams = field(default=None)
    request: Optional[UpdateConnectionPolicyUpdateConnectionPolicyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConnectionPolicySecurity = field(default=None)
    

@dataclass
class UpdateConnectionPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_connection_policy: Optional[shared.VoiceV1ConnectionPolicy] = field(default=None)
    
