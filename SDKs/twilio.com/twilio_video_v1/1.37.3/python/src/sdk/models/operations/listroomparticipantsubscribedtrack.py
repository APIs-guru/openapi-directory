from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_ROOM_PARTICIPANT_SUBSCRIBED_TRACK_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class ListRoomParticipantSubscribedTrackPathParams:
    participant_sid: str = field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRoomParticipantSubscribedTrackQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRoomParticipantSubscribedTrackSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse:
    meta: Optional[ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    subscribed_tracks: Optional[List[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribed_tracks') }})
    

@dataclass
class ListRoomParticipantSubscribedTrackRequest:
    path_params: ListRoomParticipantSubscribedTrackPathParams = field()
    query_params: ListRoomParticipantSubscribedTrackQueryParams = field()
    security: ListRoomParticipantSubscribedTrackSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListRoomParticipantSubscribedTrackResponse:
    content_type: str = field()
    status_code: int = field()
    list_room_participant_subscribed_track_response: Optional[ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse] = field(default=None)
    
