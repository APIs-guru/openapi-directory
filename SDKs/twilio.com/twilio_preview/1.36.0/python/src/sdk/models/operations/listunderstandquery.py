from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandQueryPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUnderstandQueryQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Language', 'style': 'form', 'explode': True }})
    model_build: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ModelBuild', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUnderstandQueryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUnderstandQueryPathParams = field(default=None)
    query_params: ListUnderstandQueryQueryParams = field(default=None)
    security: ListUnderstandQuerySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUnderstandQueryListUnderstandQueryResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListUnderstandQueryListUnderstandQueryResponse:
    meta: Optional[ListUnderstandQueryListUnderstandQueryResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    queries: Optional[List[shared.PreviewUnderstandAssistantQuery]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queries' }})
    

@dataclass
class ListUnderstandQueryResponse:
    content_type: str = field(default=None)
    list_understand_query_response: Optional[ListUnderstandQueryListUnderstandQueryResponse] = field(default=None)
    status_code: int = field(default=None)
    
