from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_POLICIES_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListPoliciesQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPoliciesSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListPoliciesRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListPoliciesQueryParams = field(default=None)
    security: ListPoliciesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListPolicies200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListPolicies200ApplicationJSONListPoliciesResponse:
    meta: Optional[ListPolicies200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[shared.TrusthubV1Policies]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ListPoliciesResponses:
    list_policies_response: Optional[ListPolicies200ApplicationJSONListPoliciesResponse] = field(default=None)
    

@dataclass
class ListPoliciesResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListPoliciesResponses]] = field(default=None)
    status_code: int = field(default=None)
    
