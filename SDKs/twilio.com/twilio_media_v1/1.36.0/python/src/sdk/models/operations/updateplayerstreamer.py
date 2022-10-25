from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class UpdatePlayerStreamerPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePlayerStreamerUpdatePlayerStreamerRequest:
    status: shared.PlayerStreamerEnumUpdateStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdatePlayerStreamerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdatePlayerStreamerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdatePlayerStreamerPathParams = field(default=None)
    request: Optional[UpdatePlayerStreamerUpdatePlayerStreamerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdatePlayerStreamerSecurity = field(default=None)
    

@dataclass
class UpdatePlayerStreamerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    media_v1_player_streamer: Optional[shared.MediaV1PlayerStreamer] = field(default=None)
    
