from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_MESSAGE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class FetchMessagePathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMessageRequest:
    path_params: FetchMessagePathParams = field()
    security: FetchMessageSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchMessageResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v1_service_channel_message: Optional[shared.IPMessagingV1ServiceChannelMessage] = field(default=None)
    
