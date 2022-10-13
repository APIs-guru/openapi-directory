from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SERVICE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListServiceQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListServiceRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListServiceQueryParams = field(default=None)
    security: ListServiceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListService200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListService200ApplicationJSONListServiceResponse:
    meta: Optional[ListService200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    services: Optional[List[shared.ServerlessV1Service]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    

@dataclass
class ListServiceResponses:
    list_service_response: Optional[ListService200ApplicationJSONListServiceResponse] = field(default=None)
    

@dataclass
class ListServiceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListServiceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
