from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchByocTrunkPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchByocTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchByocTrunkRequest:
    path_params: FetchByocTrunkPathParams = field()
    security: FetchByocTrunkSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchByocTrunkResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_byoc_trunk: Optional[shared.VoiceV1ByocTrunk] = field(default=None)
    
