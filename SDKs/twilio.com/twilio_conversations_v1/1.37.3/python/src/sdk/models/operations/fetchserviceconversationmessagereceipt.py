from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_CONVERSATION_MESSAGE_RECEIPT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceConversationMessageReceiptPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    message_sid: str = field(metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceConversationMessageReceiptSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceConversationMessageReceiptRequest:
    path_params: FetchServiceConversationMessageReceiptPathParams = field()
    security: FetchServiceConversationMessageReceiptSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceConversationMessageReceiptResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt] = field(default=None)
    
