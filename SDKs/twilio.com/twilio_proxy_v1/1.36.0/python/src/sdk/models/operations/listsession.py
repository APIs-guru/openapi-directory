from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class ListSessionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSessionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSessionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSessionPathParams = field(default=None)
    query_params: ListSessionQueryParams = field(default=None)
    security: ListSessionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSessionListSessionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSessionListSessionResponse:
    meta: Optional[ListSessionListSessionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    sessions: Optional[List[shared.ProxyV1ServiceSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessions' }})
    

@dataclass
class ListSessionResponse:
    content_type: str = field(default=None)
    list_session_response: Optional[ListSessionListSessionResponse] = field(default=None)
    status_code: int = field(default=None)
    
