from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


DELETE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteConversationPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConversationRequest:
    headers: DeleteConversationHeaders = field()
    path_params: DeleteConversationPathParams = field()
    security: DeleteConversationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
