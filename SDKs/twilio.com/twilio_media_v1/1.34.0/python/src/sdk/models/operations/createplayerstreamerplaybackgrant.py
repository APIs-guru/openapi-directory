from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_PLAYER_STREAMER_PLAYBACK_GRANT_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class CreatePlayerStreamerPlaybackGrantPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePlayerStreamerPlaybackGrantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePlayerStreamerPlaybackGrantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreatePlayerStreamerPlaybackGrantPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreatePlayerStreamerPlaybackGrantSecurity = field(default=None)
    

@dataclass
class CreatePlayerStreamerPlaybackGrantResponses:
    media_v1_player_streamer_player_streamer_playback_grant: Optional[shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant] = field(default=None)
    

@dataclass
class CreatePlayerStreamerPlaybackGrantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreatePlayerStreamerPlaybackGrantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
