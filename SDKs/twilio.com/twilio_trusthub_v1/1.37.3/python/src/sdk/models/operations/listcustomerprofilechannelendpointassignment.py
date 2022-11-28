from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListCustomerProfileChannelEndpointAssignmentPathParams:
    customer_profile_sid: str = field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCustomerProfileChannelEndpointAssignmentQueryParams:
    channel_endpoint_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ChannelEndpointSid', 'style': 'form', 'explode': True }})
    channel_endpoint_sids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ChannelEndpointSids', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCustomerProfileChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse:
    meta: Optional[ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[List[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class ListCustomerProfileChannelEndpointAssignmentRequest:
    path_params: ListCustomerProfileChannelEndpointAssignmentPathParams = field()
    query_params: ListCustomerProfileChannelEndpointAssignmentQueryParams = field()
    security: ListCustomerProfileChannelEndpointAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListCustomerProfileChannelEndpointAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    list_customer_profile_channel_endpoint_assignment_response: Optional[ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse] = field(default=None)
    
