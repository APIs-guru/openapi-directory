from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_INTERACTION_CHANNEL_PARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateInteractionChannelParticipantPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateInteractionChannelParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateInteractionChannelParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateInteractionChannelParticipantPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateInteractionChannelParticipantSecurity = field(default=None)
    

@dataclass
class CreateInteractionChannelParticipantResponses:
    flex_v1_interaction_interaction_channel_interaction_channel_participant: Optional[shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant] = field(default=None)
    

@dataclass
class CreateInteractionChannelParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateInteractionChannelParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
