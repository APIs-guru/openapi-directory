from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConversationMessagePathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateConversationMessageRequestBodyUpdateConversationMessageRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    author: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Author' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    

@dataclass
class UpdateConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConversationMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConversationMessagePathParams = field(default=None)
    headers: UpdateConversationMessageHeaders = field(default=None)
    request: Optional[UpdateConversationMessageRequestBodyUpdateConversationMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConversationMessageSecurity = field(default=None)
    

@dataclass
class UpdateConversationMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_conversation_conversation_message: Optional[shared.ConversationsV1ConversationConversationMessage] = field(default=None)
    
