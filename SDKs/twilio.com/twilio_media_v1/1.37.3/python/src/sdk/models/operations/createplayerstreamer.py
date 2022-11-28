from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]

class CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreatePlayerStreamerCreatePlayerStreamerRequest:
    max_duration: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxDuration' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    video: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Video' }})
    

@dataclass
class CreatePlayerStreamerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreatePlayerStreamerRequest:
    security: CreatePlayerStreamerSecurity = field()
    request: Optional[CreatePlayerStreamerCreatePlayerStreamerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreatePlayerStreamerResponse:
    content_type: str = field()
    status_code: int = field()
    media_v1_player_streamer: Optional[shared.MediaV1PlayerStreamer] = field(default=None)
    
