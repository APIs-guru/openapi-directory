from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONVERSATION_MESSAGE_RECEIPT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConversationMessageReceiptPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    message_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConversationMessageReceiptSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConversationMessageReceiptRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConversationMessageReceiptPathParams = field(default=None)
    security: FetchConversationMessageReceiptSecurity = field(default=None)
    

@dataclass
class FetchConversationMessageReceiptResponses:
    conversations_v1_conversation_conversation_message_conversation_message_receipt: Optional[shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt] = field(default=None)
    

@dataclass
class FetchConversationMessageReceiptResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchConversationMessageReceiptResponses]] = field(default=None)
    status_code: int = field(default=None)
    
