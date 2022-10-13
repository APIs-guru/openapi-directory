from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_USER_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateUserChannelPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUserChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUserChannelPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUserChannelSecurity = field(default=None)
    

@dataclass
class UpdateUserChannelResponses:
    ip_messaging_v2_service_user_user_channel: Optional[shared.IPMessagingV2ServiceUserUserChannel] = field(default=None)
    

@dataclass
class UpdateUserChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateUserChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
