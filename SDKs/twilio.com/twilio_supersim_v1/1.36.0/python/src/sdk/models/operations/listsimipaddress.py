from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIM_IP_ADDRESS_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListSimIPAddressPathParams:
    sim_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSimIPAddressQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSimIPAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSimIPAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSimIPAddressPathParams = field(default=None)
    query_params: ListSimIPAddressQueryParams = field(default=None)
    security: ListSimIPAddressSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSimIPAddressListSimIPAddressResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSimIPAddressListSimIPAddressResponse:
    ip_addresses: Optional[List[shared.SupersimV1SimSimIPAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_addresses' }})
    meta: Optional[ListSimIPAddressListSimIPAddressResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListSimIPAddressResponse:
    content_type: str = field(default=None)
    list_sim_ip_address_response: Optional[ListSimIPAddressListSimIPAddressResponse] = field(default=None)
    status_code: int = field(default=None)
    
