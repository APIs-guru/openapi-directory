from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateMessagePathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMessageRequestBodyUpdateMessageRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    

@dataclass
class UpdateMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateMessagePathParams = field(default=None)
    request: Optional[UpdateMessageRequestBodyUpdateMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateMessageSecurity = field(default=None)
    

@dataclass
class UpdateMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    chat_v1_service_channel_message: Optional[shared.ChatV1ServiceChannelMessage] = field(default=None)
    
