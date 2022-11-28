from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateChannelPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateChannelCreateChannelRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    type: Optional[shared.ChannelEnumChannelTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChannelRequest:
    path_params: CreateChannelPathParams = field()
    security: CreateChannelSecurity = field()
    request: Optional[CreateChannelCreateChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateChannelResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v1_service_channel: Optional[shared.IPMessagingV1ServiceChannel] = field(default=None)
    
