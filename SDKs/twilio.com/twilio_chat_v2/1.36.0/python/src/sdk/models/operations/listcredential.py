from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CREDENTIAL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class ListCredentialQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCredentialRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListCredentialQueryParams = field(default=None)
    security: ListCredentialSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCredentialListCredentialResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListCredentialListCredentialResponse:
    credentials: Optional[List[shared.ChatV2Credential]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    meta: Optional[ListCredentialListCredentialResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListCredentialResponse:
    content_type: str = field(default=None)
    list_credential_response: Optional[ListCredentialListCredentialResponse] = field(default=None)
    status_code: int = field(default=None)
    
