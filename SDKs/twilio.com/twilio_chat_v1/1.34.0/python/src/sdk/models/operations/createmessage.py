from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class CreateMessagePathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateMessagePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMessageSecurity = field(default=None)
    

@dataclass
class CreateMessageResponses:
    chat_v1_service_channel_message: Optional[shared.ChatV1ServiceChannelMessage] = field(default=None)
    

@dataclass
class CreateMessageResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateMessageResponses]] = field(default=None)
    status_code: int = field(default=None)
    
