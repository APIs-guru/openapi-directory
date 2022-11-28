from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_PARTICIPANT_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListParticipantConversationQueryParams:
    address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Address', 'style': 'form', 'explode': True }})
    identity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListParticipantConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListParticipantConversationListParticipantConversationResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListParticipantConversationListParticipantConversationResponse:
    conversations: Optional[List[shared.ConversationsV1ParticipantConversation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversations') }})
    meta: Optional[ListParticipantConversationListParticipantConversationResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListParticipantConversationRequest:
    query_params: ListParticipantConversationQueryParams = field()
    security: ListParticipantConversationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListParticipantConversationResponse:
    content_type: str = field()
    status_code: int = field()
    list_participant_conversation_response: Optional[ListParticipantConversationListParticipantConversationResponse] = field(default=None)
    
