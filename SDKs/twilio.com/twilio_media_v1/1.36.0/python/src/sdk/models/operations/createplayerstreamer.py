from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]

class CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreatePlayerStreamerRequestBodyCreatePlayerStreamerRequest:
    max_duration: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxDuration' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreatePlayerStreamerRequestBodyStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    video: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Video' }})
    

@dataclass
class CreatePlayerStreamerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePlayerStreamerRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreatePlayerStreamerRequestBodyCreatePlayerStreamerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreatePlayerStreamerSecurity = field(default=None)
    

@dataclass
class CreatePlayerStreamerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    media_v1_player_streamer: Optional[shared.MediaV1PlayerStreamer] = field(default=None)
    
