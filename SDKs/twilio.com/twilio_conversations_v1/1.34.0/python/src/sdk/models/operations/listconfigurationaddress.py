from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListConfigurationAddressQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConfigurationAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListConfigurationAddressRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListConfigurationAddressQueryParams = field(default=None)
    security: ListConfigurationAddressSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListConfigurationAddress200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListConfigurationAddress200ApplicationJSONListConfigurationAddressResponse:
    address_configurations: Optional[List[shared.ConversationsV1ConfigurationAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_configurations' }})
    meta: Optional[ListConfigurationAddress200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListConfigurationAddressResponses:
    list_configuration_address_response: Optional[ListConfigurationAddress200ApplicationJSONListConfigurationAddressResponse] = field(default=None)
    

@dataclass
class ListConfigurationAddressResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListConfigurationAddressResponses]] = field(default=None)
    status_code: int = field(default=None)
    
