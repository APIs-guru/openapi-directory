from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class CreateMessagePathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMessageCreateMessageRequest:
    body: str = field(metadata={'form': { 'field_name': 'Body' }})
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    from_: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'From' }})
    

@dataclass
class CreateMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessageRequest:
    path_params: CreateMessagePathParams = field()
    security: CreateMessageSecurity = field()
    request: Optional[CreateMessageCreateMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateMessageResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v1_service_channel_message: Optional[shared.ChatV1ServiceChannelMessage] = field(default=None)
    
