from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateChannelPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChannelUpdateChannelRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateChannelPathParams = field(default=None)
    request: Optional[UpdateChannelUpdateChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateChannelSecurity = field(default=None)
    

@dataclass
class UpdateChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ip_messaging_v1_service_channel: Optional[shared.IPMessagingV1ServiceChannel] = field(default=None)
    
