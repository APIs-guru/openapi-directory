from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_PLAYER_STREAMER_PLAYBACK_GRANT_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class FetchPlayerStreamerPlaybackGrantPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPlayerStreamerPlaybackGrantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPlayerStreamerPlaybackGrantRequest:
    path_params: FetchPlayerStreamerPlaybackGrantPathParams = field()
    security: FetchPlayerStreamerPlaybackGrantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchPlayerStreamerPlaybackGrantResponse:
    content_type: str = field()
    status_code: int = field()
    media_v1_player_streamer_player_streamer_playback_grant: Optional[shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant] = field(default=None)
    
