from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ITEM_ASSIGNMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class ListItemAssignmentPathParams:
    bundle_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListItemAssignmentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListItemAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListItemAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListItemAssignmentPathParams = field(default=None)
    query_params: ListItemAssignmentQueryParams = field(default=None)
    security: ListItemAssignmentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListItemAssignment200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListItemAssignment200ApplicationJSONListItemAssignmentResponse:
    meta: Optional[ListItemAssignment200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[shared.NumbersV2RegulatoryComplianceBundleItemAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ListItemAssignmentResponses:
    list_item_assignment_response: Optional[ListItemAssignment200ApplicationJSONListItemAssignmentResponse] = field(default=None)
    

@dataclass
class ListItemAssignmentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListItemAssignmentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
