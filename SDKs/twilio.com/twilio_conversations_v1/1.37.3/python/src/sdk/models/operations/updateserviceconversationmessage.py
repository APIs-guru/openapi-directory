from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceConversationMessagePathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConversationMessageUpdateServiceConversationMessageRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    author: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Author' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    

@dataclass
class UpdateServiceConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceConversationMessageRequest:
    headers: UpdateServiceConversationMessageHeaders = field()
    path_params: UpdateServiceConversationMessagePathParams = field()
    security: UpdateServiceConversationMessageSecurity = field()
    request: Optional[UpdateServiceConversationMessageUpdateServiceConversationMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateServiceConversationMessageResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_conversation_service_conversation_message: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage] = field(default=None)
    
