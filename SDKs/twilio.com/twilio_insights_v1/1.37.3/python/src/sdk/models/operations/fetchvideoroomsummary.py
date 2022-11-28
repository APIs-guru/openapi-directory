from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_VIDEO_ROOM_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchVideoRoomSummaryPathParams:
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchVideoRoomSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVideoRoomSummaryRequest:
    path_params: FetchVideoRoomSummaryPathParams = field()
    security: FetchVideoRoomSummarySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchVideoRoomSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    insights_v1_video_room_summary: Optional[shared.InsightsV1VideoRoomSummary] = field(default=None)
    
