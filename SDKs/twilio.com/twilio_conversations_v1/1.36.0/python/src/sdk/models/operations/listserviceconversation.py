from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SERVICE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceConversationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceConversationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListServiceConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListServiceConversationPathParams = field(default=None)
    query_params: ListServiceConversationQueryParams = field(default=None)
    security: ListServiceConversationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListServiceConversation200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListServiceConversation200ApplicationJSONListServiceConversationResponse:
    conversations: Optional[List[shared.ConversationsV1ServiceServiceConversation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    meta: Optional[ListServiceConversation200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListServiceConversationResponse:
    content_type: str = field(default=None)
    list_service_conversation_response: Optional[ListServiceConversation200ApplicationJSONListServiceConversationResponse] = field(default=None)
    status_code: int = field(default=None)
    
