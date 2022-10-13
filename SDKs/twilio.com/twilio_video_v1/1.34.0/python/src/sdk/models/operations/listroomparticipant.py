from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ROOM_PARTICIPANT_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class ListRoomParticipantPathParams:
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRoomParticipantQueryParams:
    date_created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    identity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.RoomParticipantEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRoomParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListRoomParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListRoomParticipantPathParams = field(default=None)
    query_params: ListRoomParticipantQueryParams = field(default=None)
    security: ListRoomParticipantSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListRoomParticipant200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListRoomParticipant200ApplicationJSONListRoomParticipantResponse:
    meta: Optional[ListRoomParticipant200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    participants: Optional[List[shared.VideoV1RoomRoomParticipant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participants' }})
    

@dataclass
class ListRoomParticipantResponses:
    list_room_participant_response: Optional[ListRoomParticipant200ApplicationJSONListRoomParticipantResponse] = field(default=None)
    

@dataclass
class ListRoomParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListRoomParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
