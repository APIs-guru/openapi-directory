from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class ListAssistantQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListAssistantListAssistantResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListAssistantListAssistantResponse:
    assistants: Optional[List[shared.AutopilotV1Assistant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assistants') }})
    meta: Optional[ListAssistantListAssistantResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListAssistantRequest:
    query_params: ListAssistantQueryParams = field()
    security: ListAssistantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    list_assistant_response: Optional[ListAssistantListAssistantResponse] = field(default=None)
    
