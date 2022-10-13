from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchByocTrunkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchByocTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchByocTrunkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchByocTrunkPathParams = field(default=None)
    security: FetchByocTrunkSecurity = field(default=None)
    

@dataclass
class FetchByocTrunkResponses:
    voice_v1_byoc_trunk: Optional[shared.VoiceV1ByocTrunk] = field(default=None)
    

@dataclass
class FetchByocTrunkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchByocTrunkResponses]] = field(default=None)
    status_code: int = field(default=None)
    
