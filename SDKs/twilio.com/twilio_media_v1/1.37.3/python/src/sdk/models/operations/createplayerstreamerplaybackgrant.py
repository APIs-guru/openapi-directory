from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_PLAYER_STREAMER_PLAYBACK_GRANT_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class CreatePlayerStreamerPlaybackGrantPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest:
    access_control_allow_origin: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AccessControlAllowOrigin' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreatePlayerStreamerPlaybackGrantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePlayerStreamerPlaybackGrantRequest:
    path_params: CreatePlayerStreamerPlaybackGrantPathParams = field()
    security: CreatePlayerStreamerPlaybackGrantSecurity = field()
    request: Optional[CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreatePlayerStreamerPlaybackGrantResponse:
    content_type: str = field()
    status_code: int = field()
    media_v1_player_streamer_player_streamer_playback_grant: Optional[shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant] = field(default=None)
    
