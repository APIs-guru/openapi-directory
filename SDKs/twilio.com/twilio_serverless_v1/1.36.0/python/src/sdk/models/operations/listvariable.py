from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListVariablePathParams:
    environment_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListVariableQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVariableSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListVariableRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListVariablePathParams = field(default=None)
    query_params: ListVariableQueryParams = field(default=None)
    security: ListVariableSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListVariableListVariableResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListVariableListVariableResponse:
    meta: Optional[ListVariableListVariableResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    variables: Optional[List[shared.ServerlessV1ServiceEnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    

@dataclass
class ListVariableResponse:
    content_type: str = field(default=None)
    list_variable_response: Optional[ListVariableListVariableResponse] = field(default=None)
    status_code: int = field(default=None)
    
