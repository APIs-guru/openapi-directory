from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateMessagePathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMessageUpdateMessageRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    

@dataclass
class UpdateMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMessageRequest:
    path_params: UpdateMessagePathParams = field()
    security: UpdateMessageSecurity = field()
    request: Optional[UpdateMessageUpdateMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMessageResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v1_service_channel_message: Optional[shared.ChatV1ServiceChannelMessage] = field(default=None)
    
