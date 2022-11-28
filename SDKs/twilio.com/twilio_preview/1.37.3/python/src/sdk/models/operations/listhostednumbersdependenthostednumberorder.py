from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_HOSTED_NUMBERS_DEPENDENT_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListHostedNumbersDependentHostedNumberOrderPathParams:
    signing_document_sid: str = field(metadata={'path_param': { 'field_name': 'SigningDocumentSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListHostedNumbersDependentHostedNumberOrderQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    incoming_phone_number_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'IncomingPhoneNumberSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    status: Optional[shared.DependentHostedNumberOrderEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    unique_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UniqueName', 'style': 'form', 'explode': True }})
    

@dataclass
class ListHostedNumbersDependentHostedNumberOrderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse:
    items: Optional[List[shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListHostedNumbersDependentHostedNumberOrderRequest:
    path_params: ListHostedNumbersDependentHostedNumberOrderPathParams = field()
    query_params: ListHostedNumbersDependentHostedNumberOrderQueryParams = field()
    security: ListHostedNumbersDependentHostedNumberOrderSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListHostedNumbersDependentHostedNumberOrderResponse:
    content_type: str = field()
    status_code: int = field()
    list_hosted_numbers_dependent_hosted_number_order_response: Optional[ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse] = field(default=None)
    
