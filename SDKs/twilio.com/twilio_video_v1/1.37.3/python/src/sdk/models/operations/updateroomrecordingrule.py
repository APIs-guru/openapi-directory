from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_ROOM_RECORDING_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateRoomRecordingRulePathParams:
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest:
    rules: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Rules' }})
    

@dataclass
class UpdateRoomRecordingRuleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoomRecordingRuleRequest:
    path_params: UpdateRoomRecordingRulePathParams = field()
    security: UpdateRoomRecordingRuleSecurity = field()
    request: Optional[UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRoomRecordingRuleResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_room_room_recording_rule: Optional[shared.VideoV1RoomRoomRecordingRule] = field(default=None)
    
