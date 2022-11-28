from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_ENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListEnvironmentPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListEnvironmentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEnvironmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListEnvironmentListEnvironmentResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListEnvironmentListEnvironmentResponse:
    environments: Optional[List[shared.ServerlessV1ServiceEnvironment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    meta: Optional[ListEnvironmentListEnvironmentResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListEnvironmentRequest:
    path_params: ListEnvironmentPathParams = field()
    query_params: ListEnvironmentQueryParams = field()
    security: ListEnvironmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    list_environment_response: Optional[ListEnvironmentListEnvironmentResponse] = field(default=None)
    
