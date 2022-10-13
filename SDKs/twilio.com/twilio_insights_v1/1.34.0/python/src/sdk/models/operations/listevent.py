from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_EVENT_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListEventPathParams:
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListEventQueryParams:
    edge: Optional[shared.EventEnumTwilioEdgeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Edge', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListEventRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListEventPathParams = field(default=None)
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
    events: Optional[List[shared.InsightsV1CallEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    meta: Optional[ListEvent200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListEventResponses:
    list_event_response: Optional[ListEvent200ApplicationJSONListEventResponse] = field(default=None)
    

@dataclass
class ListEventResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListEventResponses]] = field(default=None)
    status_code: int = field(default=None)
    
