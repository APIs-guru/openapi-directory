from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class FetchPlayerStreamerPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPlayerStreamerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPlayerStreamerRequest:
    path_params: FetchPlayerStreamerPathParams = field()
    security: FetchPlayerStreamerSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchPlayerStreamerResponse:
    content_type: str = field()
    status_code: int = field()
    media_v1_player_streamer: Optional[shared.MediaV1PlayerStreamer] = field(default=None)
    
