from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_FLEET_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListFleetQueryParams:
    network_access_profile: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NetworkAccessProfile', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListFleetListFleetResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListFleetListFleetResponse:
    fleets: Optional[List[shared.SupersimV1Fleet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleets') }})
    meta: Optional[ListFleetListFleetResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListFleetRequest:
    query_params: ListFleetQueryParams = field()
    security: ListFleetSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListFleetResponse:
    content_type: str = field()
    status_code: int = field()
    list_fleet_response: Optional[ListFleetListFleetResponse] = field(default=None)
    
