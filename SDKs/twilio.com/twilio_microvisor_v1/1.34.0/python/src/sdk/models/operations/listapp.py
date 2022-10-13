from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_APP_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclass
class ListAppQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListAppRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListAppQueryParams = field(default=None)
    security: ListAppSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListApp200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListApp200ApplicationJSONListAppResponse:
    apps: Optional[List[shared.MicrovisorV1App]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    meta: Optional[ListApp200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListAppResponses:
    list_app_response: Optional[ListApp200ApplicationJSONListAppResponse] = field(default=None)
    

@dataclass
class ListAppResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListAppResponses]] = field(default=None)
    status_code: int = field(default=None)
    
