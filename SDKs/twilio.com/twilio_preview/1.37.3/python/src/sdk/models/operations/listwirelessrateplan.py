from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListWirelessRatePlanQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWirelessRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListWirelessRatePlanListWirelessRatePlanResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListWirelessRatePlanListWirelessRatePlanResponse:
    meta: Optional[ListWirelessRatePlanListWirelessRatePlanResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    rate_plans: Optional[List[shared.PreviewWirelessRatePlan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_plans') }})
    

@dataclass
class ListWirelessRatePlanRequest:
    query_params: ListWirelessRatePlanQueryParams = field()
    security: ListWirelessRatePlanSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListWirelessRatePlanResponse:
    content_type: str = field()
    status_code: int = field()
    list_wireless_rate_plan_response: Optional[ListWirelessRatePlanListWirelessRatePlanResponse] = field(default=None)
    
