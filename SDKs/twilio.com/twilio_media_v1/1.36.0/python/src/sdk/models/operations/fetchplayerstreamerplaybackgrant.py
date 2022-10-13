from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_PLAYER_STREAMER_PLAYBACK_GRANT_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class FetchPlayerStreamerPlaybackGrantPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPlayerStreamerPlaybackGrantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPlayerStreamerPlaybackGrantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchPlayerStreamerPlaybackGrantPathParams = field(default=None)
    security: FetchPlayerStreamerPlaybackGrantSecurity = field(default=None)
    

@dataclass
class FetchPlayerStreamerPlaybackGrantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    media_v1_player_streamer_player_streamer_playback_grant: Optional[shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant] = field(default=None)
    
