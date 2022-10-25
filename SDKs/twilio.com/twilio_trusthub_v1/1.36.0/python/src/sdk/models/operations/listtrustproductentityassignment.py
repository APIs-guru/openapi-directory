from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListTrustProductEntityAssignmentPathParams:
    trust_product_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTrustProductEntityAssignmentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTrustProductEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListTrustProductEntityAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListTrustProductEntityAssignmentPathParams = field(default=None)
    query_params: ListTrustProductEntityAssignmentQueryParams = field(default=None)
    security: ListTrustProductEntityAssignmentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse:
    meta: Optional[ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[shared.TrusthubV1TrustProductTrustProductEntityAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ListTrustProductEntityAssignmentResponse:
    content_type: str = field(default=None)
    list_trust_product_entity_assignment_response: Optional[ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse] = field(default=None)
    status_code: int = field(default=None)
    
