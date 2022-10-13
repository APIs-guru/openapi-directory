from dataclasses import dataclass, field
from typing import Optional
DELETE_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class DeleteWebChannelPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWebChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteWebChannelPathParams = field(default=None)
    security: DeleteWebChannelSecurity = field(default=None)
    

@dataclass
class DeleteWebChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
