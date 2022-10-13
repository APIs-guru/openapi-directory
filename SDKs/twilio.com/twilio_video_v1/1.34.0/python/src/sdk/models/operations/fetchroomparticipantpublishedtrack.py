from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ROOM_PARTICIPANT_PUBLISHED_TRACK_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchRoomParticipantPublishedTrackPathParams:
    participant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoomParticipantPublishedTrackSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoomParticipantPublishedTrackRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRoomParticipantPublishedTrackPathParams = field(default=None)
    security: FetchRoomParticipantPublishedTrackSecurity = field(default=None)
    

@dataclass
class FetchRoomParticipantPublishedTrackResponses:
    video_v1_room_room_participant_room_participant_published_track: Optional[shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack] = field(default=None)
    

@dataclass
class FetchRoomParticipantPublishedTrackResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchRoomParticipantPublishedTrackResponses]] = field(default=None)
    status_code: int = field(default=None)
    
