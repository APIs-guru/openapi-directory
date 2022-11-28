from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_EVENT_SERVERS = [
	"https://monitor.twilio.com",
]


@dataclass
class ListEventQueryParams:
    actor_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ActorSid', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    event_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EventType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    resource_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ResourceSid', 'style': 'form', 'explode': True }})
    source_ip_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceIpAddress', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

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
    events: Optional[List[shared.MonitorV1Event]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    meta: Optional[ListEventListEventResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListEventRequest:
    query_params: ListEventQueryParams = field()
    security: ListEventSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListEventResponse:
    content_type: str = field()
    status_code: int = field()
    list_event_response: Optional[ListEventListEventResponse] = field(default=None)
    
