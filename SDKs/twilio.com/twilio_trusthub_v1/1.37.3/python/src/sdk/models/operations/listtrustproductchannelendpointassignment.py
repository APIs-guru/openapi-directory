from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListTrustProductChannelEndpointAssignmentPathParams:
    trust_product_sid: str = field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTrustProductChannelEndpointAssignmentQueryParams:
    channel_endpoint_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ChannelEndpointSid', 'style': 'form', 'explode': True }})
    channel_endpoint_sids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ChannelEndpointSids', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTrustProductChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse:
    meta: Optional[ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[List[shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class ListTrustProductChannelEndpointAssignmentRequest:
    path_params: ListTrustProductChannelEndpointAssignmentPathParams = field()
    query_params: ListTrustProductChannelEndpointAssignmentQueryParams = field()
    security: ListTrustProductChannelEndpointAssignmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListTrustProductChannelEndpointAssignmentResponse:
    content_type: str = field()
    status_code: int = field()
    list_trust_product_channel_endpoint_assignment_response: Optional[ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse] = field(default=None)
    
