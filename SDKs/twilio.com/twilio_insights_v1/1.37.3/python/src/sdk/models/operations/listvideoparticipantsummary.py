from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_VIDEO_PARTICIPANT_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListVideoParticipantSummaryPathParams:
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListVideoParticipantSummaryQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVideoParticipantSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListVideoParticipantSummaryListVideoParticipantSummaryResponse:
    meta: Optional[ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    participants: Optional[List[shared.InsightsV1VideoRoomSummaryVideoParticipantSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclass
class ListVideoParticipantSummaryRequest:
    path_params: ListVideoParticipantSummaryPathParams = field()
    query_params: ListVideoParticipantSummaryQueryParams = field()
    security: ListVideoParticipantSummarySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListVideoParticipantSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    list_video_participant_summary_response: Optional[ListVideoParticipantSummaryListVideoParticipantSummaryResponse] = field(default=None)
    
