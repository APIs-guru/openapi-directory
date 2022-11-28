from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class ListQueryPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListQueryQueryParams:
    dialogue_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DialogueSid', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Language', 'style': 'form', 'explode': True }})
    model_build: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ModelBuild', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListQueryListQueryResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListQueryListQueryResponse:
    meta: Optional[ListQueryListQueryResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    queries: Optional[List[shared.AutopilotV1AssistantQuery]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    

@dataclass
class ListQueryRequest:
    path_params: ListQueryPathParams = field()
    query_params: ListQueryQueryParams = field()
    security: ListQuerySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListQueryResponse:
    content_type: str = field()
    status_code: int = field()
    list_query_response: Optional[ListQueryListQueryResponse] = field(default=None)
    
