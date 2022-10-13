from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceConversationMessagePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceConversationMessageQueryParams:
    order: Optional[shared.ServiceConversationMessageEnumOrderTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListServiceConversationMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListServiceConversationMessagePathParams = field(default=None)
    query_params: ListServiceConversationMessageQueryParams = field(default=None)
    security: ListServiceConversationMessageSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListServiceConversationMessage200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListServiceConversationMessage200ApplicationJSONListServiceConversationMessageResponse:
    messages: Optional[List[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    meta: Optional[ListServiceConversationMessage200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListServiceConversationMessageResponse:
    content_type: str = field(default=None)
    list_service_conversation_message_response: Optional[ListServiceConversationMessage200ApplicationJSONListServiceConversationMessageResponse] = field(default=None)
    status_code: int = field(default=None)
    
