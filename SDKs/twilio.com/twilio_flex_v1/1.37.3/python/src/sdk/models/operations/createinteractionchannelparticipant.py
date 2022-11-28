from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


CREATE_INTERACTION_CHANNEL_PARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateInteractionChannelParticipantPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest:
    media_properties: Any = field(metadata={'form': { 'field_name': 'MediaProperties' }})
    type: shared.InteractionChannelParticipantEnumTypeEnum = field(metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateInteractionChannelParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateInteractionChannelParticipantRequest:
    path_params: CreateInteractionChannelParticipantPathParams = field()
    security: CreateInteractionChannelParticipantSecurity = field()
    request: Optional[CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateInteractionChannelParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_interaction_interaction_channel_interaction_channel_participant: Optional[shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant] = field(default=None)
    
