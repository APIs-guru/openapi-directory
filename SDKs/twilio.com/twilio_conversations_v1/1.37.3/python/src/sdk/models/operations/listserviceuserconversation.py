from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SERVICE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceUserConversationPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceUserConversationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListServiceUserConversationListServiceUserConversationResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListServiceUserConversationListServiceUserConversationResponse:
    conversations: Optional[List[shared.ConversationsV1ServiceServiceUserServiceUserConversation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversations') }})
    meta: Optional[ListServiceUserConversationListServiceUserConversationResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListServiceUserConversationRequest:
    path_params: ListServiceUserConversationPathParams = field()
    query_params: ListServiceUserConversationQueryParams = field()
    security: ListServiceUserConversationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListServiceUserConversationResponse:
    content_type: str = field()
    status_code: int = field()
    list_service_user_conversation_response: Optional[ListServiceUserConversationListServiceUserConversationResponse] = field(default=None)
    
