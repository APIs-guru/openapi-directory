from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_HOSTED_NUMBERS_DEPENDENT_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListHostedNumbersDependentHostedNumberOrderPathParams:
    signing_document_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SigningDocumentSid', 'style': 'simple', 'explode': False }})
    

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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListHostedNumbersDependentHostedNumberOrderRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListHostedNumbersDependentHostedNumberOrderPathParams = field(default=None)
    query_params: ListHostedNumbersDependentHostedNumberOrderQueryParams = field(default=None)
    security: ListHostedNumbersDependentHostedNumberOrderSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListHostedNumbersDependentHostedNumberOrder200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListHostedNumbersDependentHostedNumberOrder200ApplicationJSONListHostedNumbersDependentHostedNumberOrderResponse:
    items: Optional[List[shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    meta: Optional[ListHostedNumbersDependentHostedNumberOrder200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListHostedNumbersDependentHostedNumberOrderResponse:
    content_type: str = field(default=None)
    list_hosted_numbers_dependent_hosted_number_order_response: Optional[ListHostedNumbersDependentHostedNumberOrder200ApplicationJSONListHostedNumbersDependentHostedNumberOrderResponse] = field(default=None)
    status_code: int = field(default=None)
    
