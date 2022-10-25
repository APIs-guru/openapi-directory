from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_WIRELESS_SIM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListWirelessSimQueryParams:
    e_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EId', 'style': 'form', 'explode': True }})
    iccid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Iccid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    rate_plan: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RatePlan', 'style': 'form', 'explode': True }})
    sim_registration_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SimRegistrationCode', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWirelessSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListWirelessSimRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListWirelessSimQueryParams = field(default=None)
    security: ListWirelessSimSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListWirelessSimListWirelessSimResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListWirelessSimListWirelessSimResponse:
    meta: Optional[ListWirelessSimListWirelessSimResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    sims: Optional[List[shared.PreviewWirelessSim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sims' }})
    

@dataclass
class ListWirelessSimResponse:
    content_type: str = field(default=None)
    list_wireless_sim_response: Optional[ListWirelessSimListWirelessSimResponse] = field(default=None)
    status_code: int = field(default=None)
    
