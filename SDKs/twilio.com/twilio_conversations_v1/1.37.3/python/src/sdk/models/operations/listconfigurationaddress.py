from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListConfigurationAddressListConfigurationAddressResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListConfigurationAddressListConfigurationAddressResponse:
    address_configurations: Optional[List[shared.ConversationsV1ConfigurationAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_configurations') }})
    meta: Optional[ListConfigurationAddressListConfigurationAddressResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListConfigurationAddressRequest:
    query_params: ListConfigurationAddressQueryParams = field()
    security: ListConfigurationAddressSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListConfigurationAddressResponse:
    content_type: str = field()
    status_code: int = field()
    list_configuration_address_response: Optional[ListConfigurationAddressListConfigurationAddressResponse] = field(default=None)
    
