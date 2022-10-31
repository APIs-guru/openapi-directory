from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConversationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationUpdateConversationRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    messaging_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    state: Optional[shared.ConversationEnumStateEnum] = field(default=None, metadata={'form': { 'field_name': 'State' }})
    timers_closed: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Timers.Closed' }})
    timers_inactive: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Timers.Inactive' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConversationPathParams = field(default=None)
    headers: UpdateConversationHeaders = field(default=None)
    request: Optional[UpdateConversationUpdateConversationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConversationSecurity = field(default=None)
    

@dataclass
class UpdateConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_conversation: Optional[shared.ConversationsV1Conversation] = field(default=None)
    
