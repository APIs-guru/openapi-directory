from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListCustomerProfileQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    policy_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PolicySid', 'style': 'form', 'explode': True }})
    status: Optional[shared.CustomerProfileEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCustomerProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListCustomerProfileListCustomerProfileResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListCustomerProfileListCustomerProfileResponse:
    meta: Optional[ListCustomerProfileListCustomerProfileResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[List[shared.TrusthubV1CustomerProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class ListCustomerProfileRequest:
    query_params: ListCustomerProfileQueryParams = field()
    security: ListCustomerProfileSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListCustomerProfileResponse:
    content_type: str = field()
    status_code: int = field()
    list_customer_profile_response: Optional[ListCustomerProfileListCustomerProfileResponse] = field(default=None)
    
