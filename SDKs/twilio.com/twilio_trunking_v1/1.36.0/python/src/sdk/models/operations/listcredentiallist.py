from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class ListCredentialListPathParams:
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCredentialListQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCredentialListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListCredentialListPathParams = field(default=None)
    query_params: ListCredentialListQueryParams = field(default=None)
    security: ListCredentialListSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCredentialList200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListCredentialList200ApplicationJSONListCredentialListResponse:
    credential_lists: Optional[List[shared.TrunkingV1TrunkCredentialList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential_lists' }})
    meta: Optional[ListCredentialList200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListCredentialListResponse:
    content_type: str = field(default=None)
    list_credential_list_response: Optional[ListCredentialList200ApplicationJSONListCredentialListResponse] = field(default=None)
    status_code: int = field(default=None)
    
