from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class CreateConnectionPolicyRequestBodyCreateConnectionPolicyRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateConnectionPolicySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConnectionPolicyRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateConnectionPolicyRequestBodyCreateConnectionPolicyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateConnectionPolicySecurity = field(default=None)
    

@dataclass
class CreateConnectionPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_connection_policy: Optional[shared.VoiceV1ConnectionPolicy] = field(default=None)
    
