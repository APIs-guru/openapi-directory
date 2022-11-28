from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


DELETE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteConversationParticipantPathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationParticipantEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConversationParticipantRequest:
    headers: DeleteConversationParticipantHeaders = field()
    path_params: DeleteConversationParticipantPathParams = field()
    security: DeleteConversationParticipantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteConversationParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    
