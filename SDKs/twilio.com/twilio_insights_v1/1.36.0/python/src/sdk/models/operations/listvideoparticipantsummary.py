from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_VIDEO_PARTICIPANT_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListVideoParticipantSummaryPathParams:
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListVideoParticipantSummaryQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVideoParticipantSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListVideoParticipantSummaryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListVideoParticipantSummaryPathParams = field(default=None)
    query_params: ListVideoParticipantSummaryQueryParams = field(default=None)
    security: ListVideoParticipantSummarySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListVideoParticipantSummary200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListVideoParticipantSummary200ApplicationJSONListVideoParticipantSummaryResponse:
    meta: Optional[ListVideoParticipantSummary200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    participants: Optional[List[shared.InsightsV1VideoRoomSummaryVideoParticipantSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participants' }})
    

@dataclass
class ListVideoParticipantSummaryResponse:
    content_type: str = field(default=None)
    list_video_participant_summary_response: Optional[ListVideoParticipantSummary200ApplicationJSONListVideoParticipantSummaryResponse] = field(default=None)
    status_code: int = field(default=None)
    
