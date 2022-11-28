from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_NETWORK_ACCESS_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListNetworkAccessProfileQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListNetworkAccessProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListNetworkAccessProfileListNetworkAccessProfileResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListNetworkAccessProfileListNetworkAccessProfileResponse:
    meta: Optional[ListNetworkAccessProfileListNetworkAccessProfileResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    network_access_profiles: Optional[List[shared.SupersimV1NetworkAccessProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_access_profiles') }})
    

@dataclass
class ListNetworkAccessProfileRequest:
    query_params: ListNetworkAccessProfileQueryParams = field()
    security: ListNetworkAccessProfileSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListNetworkAccessProfileResponse:
    content_type: str = field()
    status_code: int = field()
    list_network_access_profile_response: Optional[ListNetworkAccessProfileListNetworkAccessProfileResponse] = field(default=None)
    
