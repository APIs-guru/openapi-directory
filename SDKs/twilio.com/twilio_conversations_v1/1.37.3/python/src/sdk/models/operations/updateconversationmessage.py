from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConversationMessagePathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationMessageUpdateConversationMessageRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    author: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Author' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    

@dataclass
class UpdateConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConversationMessageRequest:
    headers: UpdateConversationMessageHeaders = field()
    path_params: UpdateConversationMessagePathParams = field()
    security: UpdateConversationMessageSecurity = field()
    request: Optional[UpdateConversationMessageUpdateConversationMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateConversationMessageResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_conversation_conversation_message: Optional[shared.ConversationsV1ConversationConversationMessage] = field(default=None)
    
