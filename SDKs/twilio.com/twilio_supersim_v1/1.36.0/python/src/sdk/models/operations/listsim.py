from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListSimQueryParams:
    fleet: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Fleet', 'style': 'form', 'explode': True }})
    iccid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Iccid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.SimEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSimRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListSimQueryParams = field(default=None)
    security: ListSimSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSimListSimResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSimListSimResponse:
    meta: Optional[ListSimListSimResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    sims: Optional[List[shared.SupersimV1Sim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sims' }})
    

@dataclass
class ListSimResponse:
    content_type: str = field(default=None)
    list_sim_response: Optional[ListSimListSimResponse] = field(default=None)
    status_code: int = field(default=None)
    
