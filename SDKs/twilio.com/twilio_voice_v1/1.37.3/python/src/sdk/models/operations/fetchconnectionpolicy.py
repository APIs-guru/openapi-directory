from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchConnectionPolicyPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConnectionPolicySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConnectionPolicyRequest:
    path_params: FetchConnectionPolicyPathParams = field()
    security: FetchConnectionPolicySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchConnectionPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_connection_policy: Optional[shared.VoiceV1ConnectionPolicy] = field(default=None)
    
