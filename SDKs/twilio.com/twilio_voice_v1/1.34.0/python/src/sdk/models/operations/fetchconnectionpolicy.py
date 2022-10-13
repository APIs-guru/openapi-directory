from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchConnectionPolicyPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConnectionPolicySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConnectionPolicyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConnectionPolicyPathParams = field(default=None)
    security: FetchConnectionPolicySecurity = field(default=None)
    

@dataclass
class FetchConnectionPolicyResponses:
    voice_v1_connection_policy: Optional[shared.VoiceV1ConnectionPolicy] = field(default=None)
    

@dataclass
class FetchConnectionPolicyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchConnectionPolicyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
