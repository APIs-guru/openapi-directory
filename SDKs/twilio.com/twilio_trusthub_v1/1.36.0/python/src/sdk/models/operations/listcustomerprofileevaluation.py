from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CUSTOMER_PROFILE_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListCustomerProfileEvaluationPathParams:
    customer_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCustomerProfileEvaluationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCustomerProfileEvaluationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCustomerProfileEvaluationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListCustomerProfileEvaluationPathParams = field(default=None)
    query_params: ListCustomerProfileEvaluationQueryParams = field(default=None)
    security: ListCustomerProfileEvaluationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCustomerProfileEvaluation200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListCustomerProfileEvaluation200ApplicationJSONListCustomerProfileEvaluationResponse:
    meta: Optional[ListCustomerProfileEvaluation200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[shared.TrusthubV1CustomerProfileCustomerProfileEvaluation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ListCustomerProfileEvaluationResponse:
    content_type: str = field(default=None)
    list_customer_profile_evaluation_response: Optional[ListCustomerProfileEvaluation200ApplicationJSONListCustomerProfileEvaluationResponse] = field(default=None)
    status_code: int = field(default=None)
    
