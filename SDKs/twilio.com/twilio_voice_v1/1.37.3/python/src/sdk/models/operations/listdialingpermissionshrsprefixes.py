from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_DIALING_PERMISSIONS_HRS_PREFIXES_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListDialingPermissionsHrsPrefixesPathParams:
    iso_code: str = field(metadata={'path_param': { 'field_name': 'IsoCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDialingPermissionsHrsPrefixesQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDialingPermissionsHrsPrefixesSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse:
    content: Optional[List[shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    meta: Optional[ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListDialingPermissionsHrsPrefixesRequest:
    path_params: ListDialingPermissionsHrsPrefixesPathParams = field()
    query_params: ListDialingPermissionsHrsPrefixesQueryParams = field()
    security: ListDialingPermissionsHrsPrefixesSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListDialingPermissionsHrsPrefixesResponse:
    content_type: str = field()
    status_code: int = field()
    list_dialing_permissions_hrs_prefixes_response: Optional[ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse] = field(default=None)
    
