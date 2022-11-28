from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ROOM_PARTICIPANT_SUBSCRIBED_TRACK_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchRoomParticipantSubscribedTrackPathParams:
    participant_sid: str = field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoomParticipantSubscribedTrackSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoomParticipantSubscribedTrackRequest:
    path_params: FetchRoomParticipantSubscribedTrackPathParams = field()
    security: FetchRoomParticipantSubscribedTrackSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRoomParticipantSubscribedTrackResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_room_room_participant_room_participant_subscribed_track: Optional[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack] = field(default=None)
    
