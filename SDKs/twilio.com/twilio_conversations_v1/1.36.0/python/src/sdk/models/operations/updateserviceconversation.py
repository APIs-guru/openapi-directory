from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SERVICE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceConversationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateServiceConversationRequestBodyUpdateServiceConversationRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    messaging_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    state: Optional[shared.ServiceConversationEnumStateEnum] = field(default=None, metadata={'form': { 'field_name': 'State' }})
    timers_closed: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Timers.Closed' }})
    timers_inactive: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Timers.Inactive' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateServiceConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceConversationPathParams = field(default=None)
    headers: UpdateServiceConversationHeaders = field(default=None)
    request: Optional[UpdateServiceConversationRequestBodyUpdateServiceConversationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceConversationSecurity = field(default=None)
    

@dataclass
class UpdateServiceConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_conversation: Optional[shared.ConversationsV1ServiceServiceConversation] = field(default=None)
    
