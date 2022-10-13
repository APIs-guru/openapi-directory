from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipAuthRegistrationsCredentialListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipAuthRegistrationsCredentialListMappingQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipAuthRegistrationsCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSipAuthRegistrationsCredentialListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSipAuthRegistrationsCredentialListMappingPathParams = field(default=None)
    query_params: ListSipAuthRegistrationsCredentialListMappingQueryParams = field(default=None)
    security: ListSipAuthRegistrationsCredentialListMappingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSipAuthRegistrationsCredentialListMapping200ApplicationJSONListSipAuthRegistrationsCredentialListMappingResponse:
    contents: Optional[List[shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListSipAuthRegistrationsCredentialListMappingResponse:
    content_type: str = field(default=None)
    list_sip_auth_registrations_credential_list_mapping_response: Optional[ListSipAuthRegistrationsCredentialListMapping200ApplicationJSONListSipAuthRegistrationsCredentialListMappingResponse] = field(default=None)
    status_code: int = field(default=None)
    
