from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_ROOM_PARTICIPANT_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateRoomParticipantPathParams:
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomParticipantUpdateRoomParticipantRequest:
    status: Optional[shared.RoomParticipantEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateRoomParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoomParticipantRequest:
    path_params: UpdateRoomParticipantPathParams = field()
    security: UpdateRoomParticipantSecurity = field()
    request: Optional[UpdateRoomParticipantUpdateRoomParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRoomParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_room_room_participant: Optional[shared.VideoV1RoomRoomParticipant] = field(default=None)
    
