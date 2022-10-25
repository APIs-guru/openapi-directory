from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListFunctionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFunctionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFunctionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListFunctionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListFunctionPathParams = field(default=None)
    query_params: ListFunctionQueryParams = field(default=None)
    security: ListFunctionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListFunctionListFunctionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListFunctionListFunctionResponse:
    functions: Optional[List[shared.ServerlessV1ServiceFunction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functions' }})
    meta: Optional[ListFunctionListFunctionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListFunctionResponse:
    content_type: str = field(default=None)
    list_function_response: Optional[ListFunctionListFunctionResponse] = field(default=None)
    status_code: int = field(default=None)
    
