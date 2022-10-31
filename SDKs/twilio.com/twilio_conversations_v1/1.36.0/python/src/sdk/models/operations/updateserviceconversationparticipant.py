from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceConversationParticipantPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    identity: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    last_read_message_index: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'LastReadMessageIndex' }})
    last_read_timestamp: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'LastReadTimestamp' }})
    messaging_binding_projected_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MessagingBinding.ProjectedAddress' }})
    messaging_binding_proxy_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MessagingBinding.ProxyAddress' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class UpdateServiceConversationParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceConversationParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceConversationParticipantPathParams = field(default=None)
    headers: UpdateServiceConversationParticipantHeaders = field(default=None)
    request: Optional[UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceConversationParticipantSecurity = field(default=None)
    

@dataclass
class UpdateServiceConversationParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_conversation_service_conversation_participant: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant] = field(default=None)
    
