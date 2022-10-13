from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SERVICE_PARTICIPANT_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceParticipantConversationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceParticipantConversationQueryParams:
    address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Address', 'style': 'form', 'explode': True }})
    identity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceParticipantConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListServiceParticipantConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListServiceParticipantConversationPathParams = field(default=None)
    query_params: ListServiceParticipantConversationQueryParams = field(default=None)
    security: ListServiceParticipantConversationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListServiceParticipantConversation200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListServiceParticipantConversation200ApplicationJSONListServiceParticipantConversationResponse:
    conversations: Optional[List[shared.ConversationsV1ServiceServiceParticipantConversation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    meta: Optional[ListServiceParticipantConversation200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListServiceParticipantConversationResponses:
    list_service_participant_conversation_response: Optional[ListServiceParticipantConversation200ApplicationJSONListServiceParticipantConversationResponse] = field(default=None)
    

@dataclass
class ListServiceParticipantConversationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListServiceParticipantConversationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
