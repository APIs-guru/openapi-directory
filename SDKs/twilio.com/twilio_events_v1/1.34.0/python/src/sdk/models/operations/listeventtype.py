from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_EVENT_TYPE_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class ListEventTypeQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    schema_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SchemaId', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEventTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListEventTypeRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListEventTypeQueryParams = field(default=None)
    security: ListEventTypeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListEventType200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListEventType200ApplicationJSONListEventTypeResponse:
    meta: Optional[ListEventType200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    types: Optional[List[shared.EventsV1EventType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    

@dataclass
class ListEventTypeResponses:
    list_event_type_response: Optional[ListEventType200ApplicationJSONListEventTypeResponse] = field(default=None)
    

@dataclass
class ListEventTypeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListEventTypeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
