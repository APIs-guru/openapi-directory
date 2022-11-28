from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListHostedNumbersHostedNumberOrderQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    incoming_phone_number_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'IncomingPhoneNumberSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    status: Optional[shared.HostedNumberOrderEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    unique_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UniqueName', 'style': 'form', 'explode': True }})
    

@dataclass
class ListHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse:
    items: Optional[List[shared.PreviewHostedNumbersHostedNumberOrder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListHostedNumbersHostedNumberOrderRequest:
    query_params: ListHostedNumbersHostedNumberOrderQueryParams = field()
    security: ListHostedNumbersHostedNumberOrderSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListHostedNumbersHostedNumberOrderResponse:
    content_type: str = field()
    status_code: int = field()
    list_hosted_numbers_hosted_number_order_response: Optional[ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse] = field(default=None)
    
