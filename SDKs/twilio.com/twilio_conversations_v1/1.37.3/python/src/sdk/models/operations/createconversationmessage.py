from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateConversationMessagePathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConversationMessageCreateConversationMessageRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    author: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Author' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    media_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MediaSid' }})
    

@dataclass
class CreateConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConversationMessageRequest:
    headers: CreateConversationMessageHeaders = field()
    path_params: CreateConversationMessagePathParams = field()
    security: CreateConversationMessageSecurity = field()
    request: Optional[CreateConversationMessageCreateConversationMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateConversationMessageResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_conversation_conversation_message: Optional[shared.ConversationsV1ConversationConversationMessage] = field(default=None)
    
