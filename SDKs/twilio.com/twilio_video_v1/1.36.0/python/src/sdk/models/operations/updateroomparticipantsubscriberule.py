from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_ROOM_PARTICIPANT_SUBSCRIBE_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateRoomParticipantSubscribeRulePathParams:
    participant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoomParticipantSubscribeRuleRequestBodyUpdateRoomParticipantSubscribeRuleRequest:
    rules: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Rules' }})
    

@dataclass
class UpdateRoomParticipantSubscribeRuleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoomParticipantSubscribeRuleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRoomParticipantSubscribeRulePathParams = field(default=None)
    request: Optional[UpdateRoomParticipantSubscribeRuleRequestBodyUpdateRoomParticipantSubscribeRuleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRoomParticipantSubscribeRuleSecurity = field(default=None)
    

@dataclass
class UpdateRoomParticipantSubscribeRuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_room_room_participant_room_participant_subscribe_rule: Optional[shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule] = field(default=None)
    
