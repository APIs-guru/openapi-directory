from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListVideoRoomSummaryRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListVideoRoomSummaryQueryParams = field(default=None)
    security: ListVideoRoomSummarySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListVideoRoomSummary200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListVideoRoomSummary200ApplicationJSONListVideoRoomSummaryResponse:
    meta: Optional[ListVideoRoomSummary200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    rooms: Optional[List[shared.InsightsV1VideoRoomSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rooms' }})
    

@dataclass
class ListVideoRoomSummaryResponse:
    content_type: str = field(default=None)
    list_video_room_summary_response: Optional[ListVideoRoomSummary200ApplicationJSONListVideoRoomSummaryResponse] = field(default=None)
    status_code: int = field(default=None)
    
