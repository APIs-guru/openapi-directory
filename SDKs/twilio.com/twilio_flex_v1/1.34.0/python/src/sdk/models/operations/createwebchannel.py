from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateWebChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWebChannelRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateWebChannelSecurity = field(default=None)
    

@dataclass
class CreateWebChannelResponses:
    flex_v1_web_channel: Optional[shared.FlexV1WebChannel] = field(default=None)
    

@dataclass
class CreateWebChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateWebChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
