from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceConversationMessagePathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceConversationMessageQueryParams:
    order: Optional[shared.ServiceConversationMessageEnumOrderTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListServiceConversationMessageListServiceConversationMessageResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListServiceConversationMessageListServiceConversationMessageResponse:
    messages: Optional[List[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    meta: Optional[ListServiceConversationMessageListServiceConversationMessageResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListServiceConversationMessageRequest:
    path_params: ListServiceConversationMessagePathParams = field()
    query_params: ListServiceConversationMessageQueryParams = field()
    security: ListServiceConversationMessageSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListServiceConversationMessageResponse:
    content_type: str = field()
    status_code: int = field()
    list_service_conversation_message_response: Optional[ListServiceConversationMessageListServiceConversationMessageResponse] = field(default=None)
    
