from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_ROOM_PARTICIPANT_SUBSCRIBE_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateRoomParticipantSubscribeRulePathParams:
    participant_sid: str = field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest:
    rules: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Rules' }})
    

@dataclass
class UpdateRoomParticipantSubscribeRuleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoomParticipantSubscribeRuleRequest:
    path_params: UpdateRoomParticipantSubscribeRulePathParams = field()
    security: UpdateRoomParticipantSubscribeRuleSecurity = field()
    request: Optional[UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRoomParticipantSubscribeRuleResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_room_room_participant_room_participant_subscribe_rule: Optional[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule] = field(default=None)
    
