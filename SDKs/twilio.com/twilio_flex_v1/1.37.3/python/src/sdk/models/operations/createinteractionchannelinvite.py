from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_INTERACTION_CHANNEL_INVITE_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateInteractionChannelInvitePathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateInteractionChannelInviteCreateInteractionChannelInviteRequest:
    routing: Any = field(metadata={'form': { 'field_name': 'Routing' }})
    

@dataclass
class CreateInteractionChannelInviteSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateInteractionChannelInviteRequest:
    path_params: CreateInteractionChannelInvitePathParams = field()
    security: CreateInteractionChannelInviteSecurity = field()
    request: Optional[CreateInteractionChannelInviteCreateInteractionChannelInviteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateInteractionChannelInviteResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_interaction_interaction_channel_interaction_channel_invite: Optional[shared.FlexV1InteractionInteractionChannelInteractionChannelInvite] = field(default=None)
    
