from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_ROOM_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateRoomPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomUpdateRoomRequest:
    status: shared.RoomEnumRoomStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateRoomSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoomRequest:
    path_params: UpdateRoomPathParams = field()
    security: UpdateRoomSecurity = field()
    request: Optional[UpdateRoomUpdateRoomRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRoomResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_room: Optional[shared.VideoV1Room] = field(default=None)
    
