from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class FetchChannelPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchChannelRequest:
    path_params: FetchChannelPathParams = field()
    security: FetchChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchChannelResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v1_service_channel: Optional[shared.ChatV1ServiceChannel] = field(default=None)
    
