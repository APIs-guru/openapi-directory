from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListCustomerProfileChannelEndpointAssignmentPathParams:
    customer_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCustomerProfileChannelEndpointAssignmentQueryParams:
    channel_endpoint_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ChannelEndpointSid', 'style': 'form', 'explode': True }})
    channel_endpoint_sids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ChannelEndpointSids', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCustomerProfileChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCustomerProfileChannelEndpointAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListCustomerProfileChannelEndpointAssignmentPathParams = field(default=None)
    query_params: ListCustomerProfileChannelEndpointAssignmentQueryParams = field(default=None)
    security: ListCustomerProfileChannelEndpointAssignmentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCustomerProfileChannelEndpointAssignment200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListCustomerProfileChannelEndpointAssignment200ApplicationJSONListCustomerProfileChannelEndpointAssignmentResponse:
    meta: Optional[ListCustomerProfileChannelEndpointAssignment200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ListCustomerProfileChannelEndpointAssignmentResponses:
    list_customer_profile_channel_endpoint_assignment_response: Optional[ListCustomerProfileChannelEndpointAssignment200ApplicationJSONListCustomerProfileChannelEndpointAssignmentResponse] = field(default=None)
    

@dataclass
class ListCustomerProfileChannelEndpointAssignmentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListCustomerProfileChannelEndpointAssignmentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
