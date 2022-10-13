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
class CreatePlayerStreamerPlaybackGrantRequestBodyCreatePlayerStreamerPlaybackGrantRequest:
    access_control_allow_origin: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AccessControlAllowOrigin' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreatePlayerStreamerPlaybackGrantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePlayerStreamerPlaybackGrantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreatePlayerStreamerPlaybackGrantPathParams = field(default=None)
    request: Optional[CreatePlayerStreamerPlaybackGrantRequestBodyCreatePlayerStreamerPlaybackGrantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreatePlayerStreamerPlaybackGrantSecurity = field(default=None)
    

@dataclass
class CreatePlayerStreamerPlaybackGrantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    media_v1_player_streamer_player_streamer_playback_grant: Optional[shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant] = field(default=None)
    
