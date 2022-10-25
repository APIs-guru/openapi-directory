from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ROOM_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class ListRoomRecordingPathParams:
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRoomRecordingQueryParams:
    date_created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    source_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceSid', 'style': 'form', 'explode': True }})
    status: Optional[shared.RoomRecordingEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRoomRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListRoomRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListRoomRecordingPathParams = field(default=None)
    query_params: ListRoomRecordingQueryParams = field(default=None)
    security: ListRoomRecordingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListRoomRecordingListRoomRecordingResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListRoomRecordingListRoomRecordingResponse:
    meta: Optional[ListRoomRecordingListRoomRecordingResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    recordings: Optional[List[shared.VideoV1RoomRoomRecording]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordings' }})
    

@dataclass
class ListRoomRecordingResponse:
    content_type: str = field(default=None)
    list_room_recording_response: Optional[ListRoomRecordingListRoomRecordingResponse] = field(default=None)
    status_code: int = field(default=None)
    
