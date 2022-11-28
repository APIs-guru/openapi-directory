from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SIM_IP_ADDRESS_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListSimIPAddressPathParams:
    sim_sid: str = field(metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSimIPAddressQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSimIPAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSimIPAddressListSimIPAddressResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSimIPAddressListSimIPAddressResponse:
    ip_addresses: Optional[List[shared.SupersimV1SimSimIPAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses') }})
    meta: Optional[ListSimIPAddressListSimIPAddressResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListSimIPAddressRequest:
    path_params: ListSimIPAddressPathParams = field()
    query_params: ListSimIPAddressQueryParams = field()
    security: ListSimIPAddressSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSimIPAddressResponse:
    content_type: str = field()
    status_code: int = field()
    list_sim_ip_address_response: Optional[ListSimIPAddressListSimIPAddressResponse] = field(default=None)
    
