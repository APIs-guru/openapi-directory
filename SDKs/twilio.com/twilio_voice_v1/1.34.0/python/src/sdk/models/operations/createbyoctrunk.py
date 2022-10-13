from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class CreateByocTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateByocTrunkRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateByocTrunkSecurity = field(default=None)
    

@dataclass
class CreateByocTrunkResponses:
    voice_v1_byoc_trunk: Optional[shared.VoiceV1ByocTrunk] = field(default=None)
    

@dataclass
class CreateByocTrunkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateByocTrunkResponses]] = field(default=None)
    status_code: int = field(default=None)
    
