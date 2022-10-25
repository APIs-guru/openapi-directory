from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CONVERSATION_MESSAGE_RECEIPT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListConversationMessageReceiptPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    message_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConversationMessageReceiptQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConversationMessageReceiptSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListConversationMessageReceiptRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListConversationMessageReceiptPathParams = field(default=None)
    query_params: ListConversationMessageReceiptQueryParams = field(default=None)
    security: ListConversationMessageReceiptSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListConversationMessageReceiptListConversationMessageReceiptResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListConversationMessageReceiptListConversationMessageReceiptResponse:
    delivery_receipts: Optional[List[shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_receipts' }})
    meta: Optional[ListConversationMessageReceiptListConversationMessageReceiptResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListConversationMessageReceiptResponse:
    content_type: str = field(default=None)
    list_conversation_message_receipt_response: Optional[ListConversationMessageReceiptListConversationMessageReceiptResponse] = field(default=None)
    status_code: int = field(default=None)
    
