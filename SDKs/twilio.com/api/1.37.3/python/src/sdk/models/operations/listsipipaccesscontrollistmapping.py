from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipIPAccessControlListMappingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipIPAccessControlListMappingQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSipIPAccessControlListMappingListSipIPAccessControlListMappingResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    ip_access_control_list_mappings: Optional[List[shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_access_control_list_mappings') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListSipIPAccessControlListMappingRequest:
    path_params: ListSipIPAccessControlListMappingPathParams = field()
    query_params: ListSipIPAccessControlListMappingQueryParams = field()
    security: ListSipIPAccessControlListMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSipIPAccessControlListMappingResponse:
    content_type: str = field()
    status_code: int = field()
    list_sip_ip_access_control_list_mapping_response: Optional[ListSipIPAccessControlListMappingListSipIPAccessControlListMappingResponse] = field(default=None)
    
