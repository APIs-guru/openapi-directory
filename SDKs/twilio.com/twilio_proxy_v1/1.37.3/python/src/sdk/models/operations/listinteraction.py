from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class ListInteractionPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListInteractionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListInteractionListInteractionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListInteractionListInteractionResponse:
    interactions: Optional[List[shared.ProxyV1ServiceSessionInteraction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    meta: Optional[ListInteractionListInteractionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListInteractionRequest:
    path_params: ListInteractionPathParams = field()
    query_params: ListInteractionQueryParams = field()
    security: ListInteractionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListInteractionResponse:
    content_type: str = field()
    status_code: int = field()
    list_interaction_response: Optional[ListInteractionListInteractionResponse] = field(default=None)
    
