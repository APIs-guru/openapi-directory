from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared
UPDATE_INTERACTION_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class UpdateInteractionChannelPathParams:
    interaction_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateInteractionChannelUpdateInteractionChannelRequest:
    routing: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Routing' }})
    status: shared.InteractionChannelEnumStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateInteractionChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateInteractionChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateInteractionChannelPathParams = field(default=None)
    request: Optional[UpdateInteractionChannelUpdateInteractionChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateInteractionChannelSecurity = field(default=None)
    

@dataclass
class UpdateInteractionChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    flex_v1_interaction_interaction_channel: Optional[shared.FlexV1InteractionInteractionChannel] = field(default=None)
    
