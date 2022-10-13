from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class ListFlexFlowQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFlexFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListFlexFlowRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListFlexFlowQueryParams = field(default=None)
    security: ListFlexFlowSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListFlexFlow200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListFlexFlow200ApplicationJSONListFlexFlowResponse:
    flex_flows: Optional[List[shared.FlexV1FlexFlow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flex_flows' }})
    meta: Optional[ListFlexFlow200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListFlexFlowResponse:
    content_type: str = field(default=None)
    list_flex_flow_response: Optional[ListFlexFlow200ApplicationJSONListFlexFlowResponse] = field(default=None)
    status_code: int = field(default=None)
    
