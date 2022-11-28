from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListNetworkListNetworkResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListNetworkListNetworkResponse:
    meta: Optional[ListNetworkListNetworkResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    networks: Optional[List[shared.SupersimV1Network]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    

@dataclass
class ListNetworkRequest:
    query_params: ListNetworkQueryParams = field()
    security: ListNetworkSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    list_network_response: Optional[ListNetworkListNetworkResponse] = field(default=None)
    
