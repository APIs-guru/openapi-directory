from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class ListAlphaSenderPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAlphaSenderQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAlphaSenderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListAlphaSenderRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListAlphaSenderPathParams = field(default=None)
    query_params: ListAlphaSenderQueryParams = field(default=None)
    security: ListAlphaSenderSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListAlphaSenderListAlphaSenderResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListAlphaSenderListAlphaSenderResponse:
    alpha_senders: Optional[List[shared.MessagingV1ServiceAlphaSender]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alpha_senders' }})
    meta: Optional[ListAlphaSenderListAlphaSenderResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListAlphaSenderResponse:
    content_type: str = field(default=None)
    list_alpha_sender_response: Optional[ListAlphaSenderListAlphaSenderResponse] = field(default=None)
    status_code: int = field(default=None)
    
