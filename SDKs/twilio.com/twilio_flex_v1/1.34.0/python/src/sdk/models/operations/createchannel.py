from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChannelRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateChannelSecurity = field(default=None)
    

@dataclass
class CreateChannelResponses:
    flex_v1_channel: Optional[shared.FlexV1Channel] = field(default=None)
    

@dataclass
class CreateChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
