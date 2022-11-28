from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_EVENT_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListEventPathParams:
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListEventQueryParams:
    edge: Optional[shared.EventEnumTwilioEdgeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Edge', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListEventListEventResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListEventListEventResponse:
    events: Optional[List[shared.InsightsV1CallEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    meta: Optional[ListEventListEventResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListEventRequest:
    path_params: ListEventPathParams = field()
    query_params: ListEventQueryParams = field()
    security: ListEventSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListEventResponse:
    content_type: str = field()
    status_code: int = field()
    list_event_response: Optional[ListEventListEventResponse] = field(default=None)
    
