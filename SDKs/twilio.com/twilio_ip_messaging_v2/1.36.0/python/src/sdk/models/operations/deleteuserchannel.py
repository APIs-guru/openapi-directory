from dataclasses import dataclass, field
from typing import Optional
DELETE_USER_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class DeleteUserChannelPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUserChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUserChannelPathParams = field(default=None)
    security: DeleteUserChannelSecurity = field(default=None)
    

@dataclass
class DeleteUserChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
