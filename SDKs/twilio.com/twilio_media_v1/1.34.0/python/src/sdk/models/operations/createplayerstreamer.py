from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class CreatePlayerStreamerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePlayerStreamerRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreatePlayerStreamerSecurity = field(default=None)
    

@dataclass
class CreatePlayerStreamerResponses:
    media_v1_player_streamer: Optional[shared.MediaV1PlayerStreamer] = field(default=None)
    

@dataclass
class CreatePlayerStreamerResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreatePlayerStreamerResponses]] = field(default=None)
    status_code: int = field(default=None)
    
