from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


CREATE_ROOM_SERVERS = [
	"https://video.twilio.com",
]

class CreateRoomCreateRoomRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateRoomCreateRoomRequest:
    audio_only: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AudioOnly' }})
    empty_room_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'EmptyRoomTimeout' }})
    enable_turn: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EnableTurn' }})
    large_room: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LargeRoom' }})
    max_participant_duration: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxParticipantDuration' }})
    max_participants: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxParticipants' }})
    media_region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MediaRegion' }})
    record_participants_on_connect: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'RecordParticipantsOnConnect' }})
    recording_rules: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'RecordingRules' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateRoomCreateRoomRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    type: Optional[shared.RoomEnumRoomTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    unused_room_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'UnusedRoomTimeout' }})
    video_codecs: Optional[List[shared.RoomEnumVideoCodecEnum]] = field(default=None, metadata={'form': { 'field_name': 'VideoCodecs' }})
    

@dataclass
class CreateRoomSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRoomRequest:
    security: CreateRoomSecurity = field()
    request: Optional[CreateRoomCreateRoomRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateRoomResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_room: Optional[shared.VideoV1Room] = field(default=None)
    
