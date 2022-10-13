from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
DELETE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteConversationParticipantPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationParticipantEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class DeleteConversationParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConversationParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteConversationParticipantPathParams = field(default=None)
    headers: DeleteConversationParticipantHeaders = field(default=None)
    security: DeleteConversationParticipantSecurity = field(default=None)
    

@dataclass
class DeleteConversationParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
