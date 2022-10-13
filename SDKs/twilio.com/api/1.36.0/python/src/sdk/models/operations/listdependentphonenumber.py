from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DEPENDENT_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListDependentPhoneNumberPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    address_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AddressSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDependentPhoneNumberQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDependentPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDependentPhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListDependentPhoneNumberPathParams = field(default=None)
    query_params: ListDependentPhoneNumberQueryParams = field(default=None)
    security: ListDependentPhoneNumberSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDependentPhoneNumber200ApplicationJSONListDependentPhoneNumberResponse:
    dependent_phone_numbers: Optional[List[shared.APIV2010AccountAddressDependentPhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependent_phone_numbers' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListDependentPhoneNumberResponse:
    content_type: str = field(default=None)
    list_dependent_phone_number_response: Optional[ListDependentPhoneNumber200ApplicationJSONListDependentPhoneNumberResponse] = field(default=None)
    status_code: int = field(default=None)
    
