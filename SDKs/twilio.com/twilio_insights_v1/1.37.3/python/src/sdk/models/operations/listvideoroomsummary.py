from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_VIDEO_ROOM_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListVideoRoomSummaryQueryParams:
    codec: Optional[List[shared.VideoRoomSummaryEnumCodecEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'Codec', 'style': 'form', 'explode': True }})
    created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'CreatedAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'CreatedBefore', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    room_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RoomName', 'style': 'form', 'explode': True }})
    room_type: Optional[List[shared.VideoRoomSummaryEnumRoomTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'RoomType', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVideoRoomSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListVideoRoomSummaryListVideoRoomSummaryResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListVideoRoomSummaryListVideoRoomSummaryResponse:
    meta: Optional[ListVideoRoomSummaryListVideoRoomSummaryResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    rooms: Optional[List[shared.InsightsV1VideoRoomSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    

@dataclass
class ListVideoRoomSummaryRequest:
    query_params: ListVideoRoomSummaryQueryParams = field()
    security: ListVideoRoomSummarySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListVideoRoomSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    list_video_room_summary_response: Optional[ListVideoRoomSummaryListVideoRoomSummaryResponse] = field(default=None)
    
