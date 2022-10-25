from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListCustomerProfileEntityAssignmentPathParams:
    customer_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCustomerProfileEntityAssignmentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCustomerProfileEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCustomerProfileEntityAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListCustomerProfileEntityAssignmentPathParams = field(default=None)
    query_params: ListCustomerProfileEntityAssignmentQueryParams = field(default=None)
    security: ListCustomerProfileEntityAssignmentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse:
    meta: Optional[ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ListCustomerProfileEntityAssignmentResponse:
    content_type: str = field(default=None)
    list_customer_profile_entity_assignment_response: Optional[ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse] = field(default=None)
    status_code: int = field(default=None)
    
