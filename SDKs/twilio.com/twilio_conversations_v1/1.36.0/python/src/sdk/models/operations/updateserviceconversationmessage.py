from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceConversationMessagePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateServiceConversationMessageRequestBodyUpdateServiceConversationMessageRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    author: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Author' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    

@dataclass
class UpdateServiceConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceConversationMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceConversationMessagePathParams = field(default=None)
    headers: UpdateServiceConversationMessageHeaders = field(default=None)
    request: Optional[UpdateServiceConversationMessageRequestBodyUpdateServiceConversationMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceConversationMessageSecurity = field(default=None)
    

@dataclass
class UpdateServiceConversationMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_conversation_service_conversation_message: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage] = field(default=None)
    
