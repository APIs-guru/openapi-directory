from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_VIDEO_PARTICIPANT_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchVideoParticipantSummaryPathParams:
    participant_sid: str = field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchVideoParticipantSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVideoParticipantSummaryRequest:
    path_params: FetchVideoParticipantSummaryPathParams = field()
    security: FetchVideoParticipantSummarySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchVideoParticipantSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    insights_v1_video_room_summary_video_participant_summary: Optional[shared.InsightsV1VideoRoomSummaryVideoParticipantSummary] = field(default=None)
    
