from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_ROOM_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class ListRoomQueryParams:
    date_created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.RoomEnumRoomStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    unique_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UniqueName', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRoomSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListRoomListRoomResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListRoomListRoomResponse:
    meta: Optional[ListRoomListRoomResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    rooms: Optional[List[shared.VideoV1Room]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    

@dataclass
class ListRoomRequest:
    query_params: ListRoomQueryParams = field()
    security: ListRoomSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListRoomResponse:
    content_type: str = field()
    status_code: int = field()
    list_room_response: Optional[ListRoomListRoomResponse] = field(default=None)
    
