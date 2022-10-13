from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_INTERACTION_CHANNEL_PARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class UpdateInteractionChannelParticipantPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateInteractionChannelParticipantRequestBodyUpdateInteractionChannelParticipantRequest:
    status: shared.InteractionChannelParticipantEnumStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateInteractionChannelParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateInteractionChannelParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateInteractionChannelParticipantPathParams = field(default=None)
    request: Optional[UpdateInteractionChannelParticipantRequestBodyUpdateInteractionChannelParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateInteractionChannelParticipantSecurity = field(default=None)
    

@dataclass
class UpdateInteractionChannelParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    flex_v1_interaction_interaction_channel_interaction_channel_participant: Optional[shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant] = field(default=None)
    
