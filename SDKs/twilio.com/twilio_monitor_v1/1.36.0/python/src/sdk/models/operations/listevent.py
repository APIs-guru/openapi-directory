from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListEventRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListEventQueryParams = field(default=None)
    security: ListEventSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListEvent200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListEvent200ApplicationJSONListEventResponse:
    events: Optional[List[shared.MonitorV1Event]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    meta: Optional[ListEvent200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListEventResponse:
    content_type: str = field(default=None)
    list_event_response: Optional[ListEvent200ApplicationJSONListEventResponse] = field(default=None)
    status_code: int = field(default=None)
    
