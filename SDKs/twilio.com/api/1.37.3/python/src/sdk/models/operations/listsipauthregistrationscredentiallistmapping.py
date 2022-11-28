from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipAuthRegistrationsCredentialListMappingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipAuthRegistrationsCredentialListMappingQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipAuthRegistrationsCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse:
    contents: Optional[List[shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListSipAuthRegistrationsCredentialListMappingRequest:
    path_params: ListSipAuthRegistrationsCredentialListMappingPathParams = field()
    query_params: ListSipAuthRegistrationsCredentialListMappingQueryParams = field()
    security: ListSipAuthRegistrationsCredentialListMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSipAuthRegistrationsCredentialListMappingResponse:
    content_type: str = field()
    status_code: int = field()
    list_sip_auth_registrations_credential_list_mapping_response: Optional[ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse] = field(default=None)
    
