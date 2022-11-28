from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConversationParticipantPathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationParticipantEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationParticipantUpdateConversationParticipantRequest:
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
class UpdateConversationParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConversationParticipantRequest:
    headers: UpdateConversationParticipantHeaders = field()
    path_params: UpdateConversationParticipantPathParams = field()
    security: UpdateConversationParticipantSecurity = field()
    request: Optional[UpdateConversationParticipantUpdateConversationParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateConversationParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_conversation_conversation_participant: Optional[shared.ConversationsV1ConversationConversationParticipant] = field(default=None)
    
