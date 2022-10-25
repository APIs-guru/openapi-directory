from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class ListFlowQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListFlowRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListFlowQueryParams = field(default=None)
    security: ListFlowSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListFlowListFlowResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListFlowListFlowResponse:
    flows: Optional[List[shared.StudioV1Flow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flows' }})
    meta: Optional[ListFlowListFlowResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListFlowResponse:
    content_type: str = field(default=None)
    list_flow_response: Optional[ListFlowListFlowResponse] = field(default=None)
    status_code: int = field(default=None)
    
