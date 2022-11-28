from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class CreateConnectionPolicyCreateConnectionPolicyRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateConnectionPolicySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConnectionPolicyRequest:
    security: CreateConnectionPolicySecurity = field()
    request: Optional[CreateConnectionPolicyCreateConnectionPolicyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateConnectionPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_connection_policy: Optional[shared.VoiceV1ConnectionPolicy] = field(default=None)
    
