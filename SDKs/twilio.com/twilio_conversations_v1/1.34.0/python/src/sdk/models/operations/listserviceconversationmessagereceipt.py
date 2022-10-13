from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SERVICE_CONVERSATION_MESSAGE_RECEIPT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceConversationMessageReceiptPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    message_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceConversationMessageReceiptQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceConversationMessageReceiptSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListServiceConversationMessageReceiptRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListServiceConversationMessageReceiptPathParams = field(default=None)
    query_params: ListServiceConversationMessageReceiptQueryParams = field(default=None)
    security: ListServiceConversationMessageReceiptSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListServiceConversationMessageReceipt200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListServiceConversationMessageReceipt200ApplicationJSONListServiceConversationMessageReceiptResponse:
    delivery_receipts: Optional[List[shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_receipts' }})
    meta: Optional[ListServiceConversationMessageReceipt200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListServiceConversationMessageReceiptResponses:
    list_service_conversation_message_receipt_response: Optional[ListServiceConversationMessageReceipt200ApplicationJSONListServiceConversationMessageReceiptResponse] = field(default=None)
    

@dataclass
class ListServiceConversationMessageReceiptResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListServiceConversationMessageReceiptResponses]] = field(default=None)
    status_code: int = field(default=None)
    
