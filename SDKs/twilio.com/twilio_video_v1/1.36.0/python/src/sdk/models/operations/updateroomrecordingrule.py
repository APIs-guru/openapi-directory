from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_ROOM_RECORDING_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateRoomRecordingRulePathParams:
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomRecordingRuleRequestBodyUpdateRoomRecordingRuleRequest:
    rules: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Rules' }})
    

@dataclass
class UpdateRoomRecordingRuleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoomRecordingRuleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRoomRecordingRulePathParams = field(default=None)
    request: Optional[UpdateRoomRecordingRuleRequestBodyUpdateRoomRecordingRuleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRoomRecordingRuleSecurity = field(default=None)
    

@dataclass
class UpdateRoomRecordingRuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_room_room_recording_rule: Optional[shared.VideoV1RoomRoomRecordingRule] = field(default=None)
    
