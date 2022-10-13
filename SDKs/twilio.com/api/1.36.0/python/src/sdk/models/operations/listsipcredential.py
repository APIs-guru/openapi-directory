from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIP_CREDENTIAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipCredentialPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    credential_list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CredentialListSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipCredentialQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSipCredentialRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSipCredentialPathParams = field(default=None)
    query_params: ListSipCredentialQueryParams = field(default=None)
    security: ListSipCredentialSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSipCredential200ApplicationJSONListSipCredentialResponse:
    credentials: Optional[List[shared.APIV2010AccountSipSipCredentialListSipCredential]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListSipCredentialResponse:
    content_type: str = field(default=None)
    list_sip_credential_response: Optional[ListSipCredential200ApplicationJSONListSipCredentialResponse] = field(default=None)
    status_code: int = field(default=None)
    
