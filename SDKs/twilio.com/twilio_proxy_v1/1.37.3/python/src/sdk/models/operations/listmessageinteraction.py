from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MESSAGE_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class ListMessageInteractionPathParams:
    participant_sid: str = field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMessageInteractionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMessageInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMessageInteractionListMessageInteractionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListMessageInteractionListMessageInteractionResponse:
    interactions: Optional[List[shared.ProxyV1ServiceSessionParticipantMessageInteraction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    meta: Optional[ListMessageInteractionListMessageInteractionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListMessageInteractionRequest:
    path_params: ListMessageInteractionPathParams = field()
    query_params: ListMessageInteractionQueryParams = field()
    security: ListMessageInteractionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMessageInteractionResponse:
    content_type: str = field()
    status_code: int = field()
    list_message_interaction_response: Optional[ListMessageInteractionListMessageInteractionResponse] = field(default=None)
    
