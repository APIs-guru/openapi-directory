from dataclasses import dataclass, field
from typing import Optional
DELETE_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class DeleteChannelPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteChannelPathParams = field(default=None)
    security: DeleteChannelSecurity = field(default=None)
    

@dataclass
class DeleteChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
