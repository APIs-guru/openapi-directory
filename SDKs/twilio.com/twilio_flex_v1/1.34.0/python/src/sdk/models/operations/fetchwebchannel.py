from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class FetchWebChannelPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWebChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWebChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWebChannelPathParams = field(default=None)
    security: FetchWebChannelSecurity = field(default=None)
    

@dataclass
class FetchWebChannelResponses:
    flex_v1_web_channel: Optional[shared.FlexV1WebChannel] = field(default=None)
    

@dataclass
class FetchWebChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWebChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
