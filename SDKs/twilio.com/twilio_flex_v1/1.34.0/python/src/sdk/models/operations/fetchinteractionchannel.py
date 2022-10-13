from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_INTERACTION_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class FetchInteractionChannelPathParams:
    interaction_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchInteractionChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchInteractionChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchInteractionChannelPathParams = field(default=None)
    security: FetchInteractionChannelSecurity = field(default=None)
    

@dataclass
class FetchInteractionChannelResponses:
    flex_v1_interaction_interaction_channel: Optional[shared.FlexV1InteractionInteractionChannel] = field(default=None)
    

@dataclass
class FetchInteractionChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchInteractionChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
