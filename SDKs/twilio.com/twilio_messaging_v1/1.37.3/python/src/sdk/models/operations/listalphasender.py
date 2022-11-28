from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class ListAlphaSenderPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAlphaSenderQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAlphaSenderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListAlphaSenderListAlphaSenderResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListAlphaSenderListAlphaSenderResponse:
    alpha_senders: Optional[List[shared.MessagingV1ServiceAlphaSender]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha_senders') }})
    meta: Optional[ListAlphaSenderListAlphaSenderResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListAlphaSenderRequest:
    path_params: ListAlphaSenderPathParams = field()
    query_params: ListAlphaSenderQueryParams = field()
    security: ListAlphaSenderSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListAlphaSenderResponse:
    content_type: str = field()
    status_code: int = field()
    list_alpha_sender_response: Optional[ListAlphaSenderListAlphaSenderResponse] = field(default=None)
    
