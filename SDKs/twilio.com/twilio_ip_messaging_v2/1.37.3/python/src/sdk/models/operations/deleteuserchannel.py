from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_USER_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class DeleteUserChannelPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUserChannelRequest:
    path_params: DeleteUserChannelPathParams = field()
    security: DeleteUserChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUserChannelResponse:
    content_type: str = field()
    status_code: int = field()
    
