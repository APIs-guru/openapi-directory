from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class UpdatePlayerStreamerPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePlayerStreamerUpdatePlayerStreamerRequest:
    status: shared.PlayerStreamerEnumUpdateStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdatePlayerStreamerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdatePlayerStreamerRequest:
    path_params: UpdatePlayerStreamerPathParams = field()
    security: UpdatePlayerStreamerSecurity = field()
    request: Optional[UpdatePlayerStreamerUpdatePlayerStreamerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdatePlayerStreamerResponse:
    content_type: str = field()
    status_code: int = field()
    media_v1_player_streamer: Optional[shared.MediaV1PlayerStreamer] = field(default=None)
    
