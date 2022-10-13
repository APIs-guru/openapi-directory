from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DIALING_PERMISSIONS_HRS_PREFIXES_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListDialingPermissionsHrsPrefixesPathParams:
    iso_code: str = field(default=None, metadata={'path_param': { 'field_name': 'IsoCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDialingPermissionsHrsPrefixesQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDialingPermissionsHrsPrefixesSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDialingPermissionsHrsPrefixesRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListDialingPermissionsHrsPrefixesPathParams = field(default=None)
    query_params: ListDialingPermissionsHrsPrefixesQueryParams = field(default=None)
    security: ListDialingPermissionsHrsPrefixesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDialingPermissionsHrsPrefixes200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDialingPermissionsHrsPrefixes200ApplicationJSONListDialingPermissionsHrsPrefixesResponse:
    content: Optional[List[shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    meta: Optional[ListDialingPermissionsHrsPrefixes200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDialingPermissionsHrsPrefixesResponses:
    list_dialing_permissions_hrs_prefixes_response: Optional[ListDialingPermissionsHrsPrefixes200ApplicationJSONListDialingPermissionsHrsPrefixesResponse] = field(default=None)
    

@dataclass
class ListDialingPermissionsHrsPrefixesResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListDialingPermissionsHrsPrefixesResponses]] = field(default=None)
    status_code: int = field(default=None)
    
