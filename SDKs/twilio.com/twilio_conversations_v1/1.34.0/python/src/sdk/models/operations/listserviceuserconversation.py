from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SERVICE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceUserConversationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceUserConversationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListServiceUserConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListServiceUserConversationPathParams = field(default=None)
    query_params: ListServiceUserConversationQueryParams = field(default=None)
    security: ListServiceUserConversationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListServiceUserConversation200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListServiceUserConversation200ApplicationJSONListServiceUserConversationResponse:
    conversations: Optional[List[shared.ConversationsV1ServiceServiceUserServiceUserConversation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    meta: Optional[ListServiceUserConversation200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListServiceUserConversationResponses:
    list_service_user_conversation_response: Optional[ListServiceUserConversation200ApplicationJSONListServiceUserConversationResponse] = field(default=None)
    

@dataclass
class ListServiceUserConversationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListServiceUserConversationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
