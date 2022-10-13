from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class UpdateByocTrunkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateByocTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateByocTrunkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateByocTrunkPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateByocTrunkSecurity = field(default=None)
    

@dataclass
class UpdateByocTrunkResponses:
    voice_v1_byoc_trunk: Optional[shared.VoiceV1ByocTrunk] = field(default=None)
    

@dataclass
class UpdateByocTrunkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateByocTrunkResponses]] = field(default=None)
    status_code: int = field(default=None)
    
