from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipIPAddressPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = field(metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipIPAddressQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipIPAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSipIPAddressListSipIPAddressResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    ip_addresses: Optional[List[shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListSipIPAddressRequest:
    path_params: ListSipIPAddressPathParams = field()
    query_params: ListSipIPAddressQueryParams = field()
    security: ListSipIPAddressSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSipIPAddressResponse:
    content_type: str = field()
    status_code: int = field()
    list_sip_ip_address_response: Optional[ListSipIPAddressListSipIPAddressResponse] = field(default=None)
    
