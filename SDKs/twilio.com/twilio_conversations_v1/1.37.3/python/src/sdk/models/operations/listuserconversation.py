from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListUserConversationPathParams:
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUserConversationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUserConversationListUserConversationResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListUserConversationListUserConversationResponse:
    conversations: Optional[List[shared.ConversationsV1UserUserConversation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversations') }})
    meta: Optional[ListUserConversationListUserConversationResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListUserConversationRequest:
    path_params: ListUserConversationPathParams = field()
    query_params: ListUserConversationQueryParams = field()
    security: ListUserConversationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUserConversationResponse:
    content_type: str = field()
    status_code: int = field()
    list_user_conversation_response: Optional[ListUserConversationListUserConversationResponse] = field(default=None)
    
