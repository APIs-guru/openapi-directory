from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateChannelPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateChannelPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateChannelSecurity = field(default=None)
    

@dataclass
class CreateChannelResponses:
    ip_messaging_v1_service_channel: Optional[shared.IPMessagingV1ServiceChannel] = field(default=None)
    

@dataclass
class CreateChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
