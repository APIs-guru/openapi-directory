from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandAssistantQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUnderstandAssistantListUnderstandAssistantResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListUnderstandAssistantListUnderstandAssistantResponse:
    assistants: Optional[List[shared.PreviewUnderstandAssistant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assistants') }})
    meta: Optional[ListUnderstandAssistantListUnderstandAssistantResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListUnderstandAssistantRequest:
    query_params: ListUnderstandAssistantQueryParams = field()
    security: ListUnderstandAssistantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUnderstandAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    list_understand_assistant_response: Optional[ListUnderstandAssistantListUnderstandAssistantResponse] = field(default=None)
    
