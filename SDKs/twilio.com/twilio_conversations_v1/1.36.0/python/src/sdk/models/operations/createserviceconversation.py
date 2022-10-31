from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
CREATE_SERVICE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateServiceConversationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceConversationCreateServiceConversationRequest:
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
class CreateServiceConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateServiceConversationPathParams = field(default=None)
    headers: CreateServiceConversationHeaders = field(default=None)
    request: Optional[CreateServiceConversationCreateServiceConversationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceConversationSecurity = field(default=None)
    

@dataclass
class CreateServiceConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_conversation: Optional[shared.ConversationsV1ServiceServiceConversation] = field(default=None)
    
