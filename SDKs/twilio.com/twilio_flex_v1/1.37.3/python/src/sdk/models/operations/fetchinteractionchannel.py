from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_INTERACTION_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class FetchInteractionChannelPathParams:
    interaction_sid: str = field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchInteractionChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchInteractionChannelRequest:
    path_params: FetchInteractionChannelPathParams = field()
    security: FetchInteractionChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchInteractionChannelResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_interaction_interaction_channel: Optional[shared.FlexV1InteractionInteractionChannel] = field(default=None)
    
