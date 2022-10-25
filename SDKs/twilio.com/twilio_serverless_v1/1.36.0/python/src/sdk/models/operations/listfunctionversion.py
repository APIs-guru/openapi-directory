from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_FUNCTION_VERSION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListFunctionVersionPathParams:
    function_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFunctionVersionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFunctionVersionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListFunctionVersionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListFunctionVersionPathParams = field(default=None)
    query_params: ListFunctionVersionQueryParams = field(default=None)
    security: ListFunctionVersionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListFunctionVersionListFunctionVersionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListFunctionVersionListFunctionVersionResponse:
    function_versions: Optional[List[shared.ServerlessV1ServiceFunctionFunctionVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'function_versions' }})
    meta: Optional[ListFunctionVersionListFunctionVersionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListFunctionVersionResponse:
    content_type: str = field(default=None)
    list_function_version_response: Optional[ListFunctionVersionListFunctionVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
