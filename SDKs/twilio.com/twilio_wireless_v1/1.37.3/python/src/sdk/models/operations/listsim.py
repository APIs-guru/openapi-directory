from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SIM_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class ListSimQueryParams:
    e_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EId', 'style': 'form', 'explode': True }})
    iccid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Iccid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    rate_plan: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RatePlan', 'style': 'form', 'explode': True }})
    sim_registration_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SimRegistrationCode', 'style': 'form', 'explode': True }})
    status: Optional[shared.SimEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSimListSimResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSimListSimResponse:
    meta: Optional[ListSimListSimResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    sims: Optional[List[shared.WirelessV1Sim]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sims') }})
    

@dataclass
class ListSimRequest:
    query_params: ListSimQueryParams = field()
    security: ListSimSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSimResponse:
    content_type: str = field()
    status_code: int = field()
    list_sim_response: Optional[ListSimListSimResponse] = field(default=None)
    
