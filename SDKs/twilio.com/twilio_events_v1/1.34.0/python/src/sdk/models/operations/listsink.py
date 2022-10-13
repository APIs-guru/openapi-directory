from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class ListSinkQueryParams:
    in_use: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'InUse', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSinkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSinkRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListSinkQueryParams = field(default=None)
    security: ListSinkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSink200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSink200ApplicationJSONListSinkResponse:
    meta: Optional[ListSink200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    sinks: Optional[List[shared.EventsV1Sink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sinks' }})
    

@dataclass
class ListSinkResponses:
    list_sink_response: Optional[ListSink200ApplicationJSONListSinkResponse] = field(default=None)
    

@dataclass
class ListSinkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSinkResponses]] = field(default=None)
    status_code: int = field(default=None)
    
