from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandQueryPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUnderstandQueryQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Language', 'style': 'form', 'explode': True }})
    model_build: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ModelBuild', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUnderstandQueryListUnderstandQueryResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListUnderstandQueryListUnderstandQueryResponse:
    meta: Optional[ListUnderstandQueryListUnderstandQueryResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    queries: Optional[List[shared.PreviewUnderstandAssistantQuery]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    

@dataclass
class ListUnderstandQueryRequest:
    path_params: ListUnderstandQueryPathParams = field()
    query_params: ListUnderstandQueryQueryParams = field()
    security: ListUnderstandQuerySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUnderstandQueryResponse:
    content_type: str = field()
    status_code: int = field()
    list_understand_query_response: Optional[ListUnderstandQueryListUnderstandQueryResponse] = field(default=None)
    
