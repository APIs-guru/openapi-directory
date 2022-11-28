from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class FetchWebChannelPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWebChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWebChannelRequest:
    path_params: FetchWebChannelPathParams = field()
    security: FetchWebChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWebChannelResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_web_channel: Optional[shared.FlexV1WebChannel] = field(default=None)
    
