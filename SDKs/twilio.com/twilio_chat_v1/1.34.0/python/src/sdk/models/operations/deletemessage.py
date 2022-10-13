from dataclasses import dataclass, field
from typing import Optional
DELETE_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class DeleteMessagePathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteMessagePathParams = field(default=None)
    security: DeleteMessageSecurity = field(default=None)
    

@dataclass
class DeleteMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
