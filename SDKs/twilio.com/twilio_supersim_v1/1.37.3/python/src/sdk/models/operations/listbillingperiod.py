from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_BILLING_PERIOD_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListBillingPeriodPathParams:
    sim_sid: str = field(metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBillingPeriodQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBillingPeriodSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListBillingPeriodListBillingPeriodResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListBillingPeriodListBillingPeriodResponse:
    billing_periods: Optional[List[shared.SupersimV1SimBillingPeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_periods') }})
    meta: Optional[ListBillingPeriodListBillingPeriodResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListBillingPeriodRequest:
    path_params: ListBillingPeriodPathParams = field()
    query_params: ListBillingPeriodQueryParams = field()
    security: ListBillingPeriodSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListBillingPeriodResponse:
    content_type: str = field()
    status_code: int = field()
    list_billing_period_response: Optional[ListBillingPeriodListBillingPeriodResponse] = field(default=None)
    
