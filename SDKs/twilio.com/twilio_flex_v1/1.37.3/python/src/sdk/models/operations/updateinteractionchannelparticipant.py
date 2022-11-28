from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_INTERACTION_CHANNEL_PARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class UpdateInteractionChannelParticipantPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest:
    status: shared.InteractionChannelParticipantEnumStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateInteractionChannelParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateInteractionChannelParticipantRequest:
    path_params: UpdateInteractionChannelParticipantPathParams = field()
    security: UpdateInteractionChannelParticipantSecurity = field()
    request: Optional[UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateInteractionChannelParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_interaction_interaction_channel_interaction_channel_participant: Optional[shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant] = field(default=None)
    
