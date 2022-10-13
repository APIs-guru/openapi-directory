from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipCredentialListPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipCredentialListQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSipCredentialListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSipCredentialListPathParams = field(default=None)
    query_params: ListSipCredentialListQueryParams = field(default=None)
    security: ListSipCredentialListSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSipCredentialList200ApplicationJSONListSipCredentialListResponse:
    credential_lists: Optional[List[shared.APIV2010AccountSipSipCredentialList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential_lists' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListSipCredentialListResponses:
    list_sip_credential_list_response: Optional[ListSipCredentialList200ApplicationJSONListSipCredentialListResponse] = field(default=None)
    

@dataclass
class ListSipCredentialListResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSipCredentialListResponses]] = field(default=None)
    status_code: int = field(default=None)
    
