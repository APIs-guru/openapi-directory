from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_MESSAGE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class DeleteMessagePathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMessageRequest:
    path_params: DeleteMessagePathParams = field()
    security: DeleteMessageSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteMessageResponse:
    content_type: str = field()
    status_code: int = field()
    
