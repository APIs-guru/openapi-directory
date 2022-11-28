from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_USER_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class FetchUserChannelPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUserChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUserChannelRequest:
    path_params: FetchUserChannelPathParams = field()
    security: FetchUserChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUserChannelResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v2_service_user_user_channel: Optional[shared.ChatV2ServiceUserUserChannel] = field(default=None)
    
