from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_VIDEO_ROOM_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchVideoRoomSummaryPathParams:
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchVideoRoomSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVideoRoomSummaryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchVideoRoomSummaryPathParams = field(default=None)
    security: FetchVideoRoomSummarySecurity = field(default=None)
    

@dataclass
class FetchVideoRoomSummaryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    insights_v1_video_room_summary: Optional[shared.InsightsV1VideoRoomSummary] = field(default=None)
    
