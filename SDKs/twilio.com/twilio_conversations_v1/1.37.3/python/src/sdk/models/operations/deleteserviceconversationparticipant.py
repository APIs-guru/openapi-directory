from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


DELETE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceConversationParticipantPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceConversationParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceConversationParticipantRequest:
    headers: DeleteServiceConversationParticipantHeaders = field()
    path_params: DeleteServiceConversationParticipantPathParams = field()
    security: DeleteServiceConversationParticipantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteServiceConversationParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    
