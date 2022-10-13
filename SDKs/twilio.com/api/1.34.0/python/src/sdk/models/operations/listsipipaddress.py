from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipIPAddressPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipIPAddressQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipIPAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSipIPAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSipIPAddressPathParams = field(default=None)
    query_params: ListSipIPAddressQueryParams = field(default=None)
    security: ListSipIPAddressSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSipIPAddress200ApplicationJSONListSipIPAddressResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    ip_addresses: Optional[List[shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_addresses' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListSipIPAddressResponses:
    list_sip_ip_address_response: Optional[ListSipIPAddress200ApplicationJSONListSipIPAddressResponse] = field(default=None)
    

@dataclass
class ListSipIPAddressResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSipIPAddressResponses]] = field(default=None)
    status_code: int = field(default=None)
    
