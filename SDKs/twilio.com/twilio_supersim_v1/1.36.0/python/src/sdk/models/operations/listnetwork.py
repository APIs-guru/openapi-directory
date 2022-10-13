from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListNetworkQueryParams:
    iso_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'IsoCountry', 'style': 'form', 'explode': True }})
    mcc: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Mcc', 'style': 'form', 'explode': True }})
    mnc: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Mnc', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListNetworkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListNetworkRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListNetworkQueryParams = field(default=None)
    security: ListNetworkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListNetwork200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListNetwork200ApplicationJSONListNetworkResponse:
    meta: Optional[ListNetwork200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    networks: Optional[List[shared.SupersimV1Network]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    

@dataclass
class ListNetworkResponse:
    content_type: str = field(default=None)
    list_network_response: Optional[ListNetwork200ApplicationJSONListNetworkResponse] = field(default=None)
    status_code: int = field(default=None)
    
