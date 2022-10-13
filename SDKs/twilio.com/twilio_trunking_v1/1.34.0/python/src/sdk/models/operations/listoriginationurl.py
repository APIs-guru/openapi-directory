from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class ListOriginationURLPathParams:
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListOriginationURLQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListOriginationURLSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListOriginationURLRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListOriginationURLPathParams = field(default=None)
    query_params: ListOriginationURLQueryParams = field(default=None)
    security: ListOriginationURLSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListOriginationURL200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListOriginationURL200ApplicationJSONListOriginationURLResponse:
    meta: Optional[ListOriginationURL200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    origination_urls: Optional[List[shared.TrunkingV1TrunkOriginationURL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origination_urls' }})
    

@dataclass
class ListOriginationURLResponses:
    list_origination_url_response: Optional[ListOriginationURL200ApplicationJSONListOriginationURLResponse] = field(default=None)
    

@dataclass
class ListOriginationURLResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListOriginationURLResponses]] = field(default=None)
    status_code: int = field(default=None)
    
