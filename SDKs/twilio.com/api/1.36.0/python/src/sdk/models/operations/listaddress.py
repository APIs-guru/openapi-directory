from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListAddressPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAddressQueryParams:
    customer_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CustomerName', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    iso_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'IsoCountry', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListAddressPathParams = field(default=None)
    query_params: ListAddressQueryParams = field(default=None)
    security: ListAddressSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListAddress200ApplicationJSONListAddressResponse:
    addresses: Optional[List[shared.APIV2010AccountAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListAddressResponse:
    content_type: str = field(default=None)
    list_address_response: Optional[ListAddress200ApplicationJSONListAddressResponse] = field(default=None)
    status_code: int = field(default=None)
    
