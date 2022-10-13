from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ROOM_RECORDING_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchRoomRecordingRulePathParams:
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoomRecordingRuleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoomRecordingRuleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRoomRecordingRulePathParams = field(default=None)
    security: FetchRoomRecordingRuleSecurity = field(default=None)
    

@dataclass
class FetchRoomRecordingRuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_room_room_recording_rule: Optional[shared.VideoV1RoomRoomRecordingRule] = field(default=None)
    
