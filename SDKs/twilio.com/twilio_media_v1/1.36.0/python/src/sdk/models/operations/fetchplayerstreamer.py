from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class FetchPlayerStreamerPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPlayerStreamerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPlayerStreamerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchPlayerStreamerPathParams = field(default=None)
    security: FetchPlayerStreamerSecurity = field(default=None)
    

@dataclass
class FetchPlayerStreamerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    media_v1_player_streamer: Optional[shared.MediaV1PlayerStreamer] = field(default=None)
    
