from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_BUILD_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListBuildPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBuildQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListBuildPathParams = field(default=None)
    query_params: ListBuildQueryParams = field(default=None)
    security: ListBuildSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListBuild200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListBuild200ApplicationJSONListBuildResponse:
    builds: Optional[List[shared.ServerlessV1ServiceBuild]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builds' }})
    meta: Optional[ListBuild200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListBuildResponses:
    list_build_response: Optional[ListBuild200ApplicationJSONListBuildResponse] = field(default=None)
    

@dataclass
class ListBuildResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListBuildResponses]] = field(default=None)
    status_code: int = field(default=None)
    
