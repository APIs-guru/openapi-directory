from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_ROOM_PARTICIPANT_ANONYMIZE_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateRoomParticipantAnonymizePathParams:
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomParticipantAnonymizeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoomParticipantAnonymizeRequest:
    path_params: UpdateRoomParticipantAnonymizePathParams = field()
    security: UpdateRoomParticipantAnonymizeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRoomParticipantAnonymizeResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_room_room_participant_room_participant_anonymize: Optional[shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize] = field(default=None)
    
