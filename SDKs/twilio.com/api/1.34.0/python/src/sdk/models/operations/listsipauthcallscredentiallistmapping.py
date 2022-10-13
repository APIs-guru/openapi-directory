from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIP_AUTH_CALLS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipAuthCallsCredentialListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipAuthCallsCredentialListMappingQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipAuthCallsCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSipAuthCallsCredentialListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSipAuthCallsCredentialListMappingPathParams = field(default=None)
    query_params: ListSipAuthCallsCredentialListMappingQueryParams = field(default=None)
    security: ListSipAuthCallsCredentialListMappingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSipAuthCallsCredentialListMapping200ApplicationJSONListSipAuthCallsCredentialListMappingResponse:
    contents: Optional[List[shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListSipAuthCallsCredentialListMappingResponses:
    list_sip_auth_calls_credential_list_mapping_response: Optional[ListSipAuthCallsCredentialListMapping200ApplicationJSONListSipAuthCallsCredentialListMappingResponse] = field(default=None)
    

@dataclass
class ListSipAuthCallsCredentialListMappingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSipAuthCallsCredentialListMappingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
