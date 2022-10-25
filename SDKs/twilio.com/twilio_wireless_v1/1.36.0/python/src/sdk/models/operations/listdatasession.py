from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DATA_SESSION_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class ListDataSessionPathParams:
    sim_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDataSessionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDataSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDataSessionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListDataSessionPathParams = field(default=None)
    query_params: ListDataSessionQueryParams = field(default=None)
    security: ListDataSessionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDataSessionListDataSessionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDataSessionListDataSessionResponse:
    data_sessions: Optional[List[shared.WirelessV1SimDataSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_sessions' }})
    meta: Optional[ListDataSessionListDataSessionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDataSessionResponse:
    content_type: str = field(default=None)
    list_data_session_response: Optional[ListDataSessionListDataSessionResponse] = field(default=None)
    status_code: int = field(default=None)
    
