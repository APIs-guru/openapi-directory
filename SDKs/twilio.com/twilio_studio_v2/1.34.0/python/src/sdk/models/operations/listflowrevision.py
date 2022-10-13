from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_FLOW_REVISION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class ListFlowRevisionPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFlowRevisionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFlowRevisionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListFlowRevisionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListFlowRevisionPathParams = field(default=None)
    query_params: ListFlowRevisionQueryParams = field(default=None)
    security: ListFlowRevisionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListFlowRevision200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListFlowRevision200ApplicationJSONListFlowRevisionResponse:
    meta: Optional[ListFlowRevision200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    revisions: Optional[List[shared.StudioV2FlowFlowRevision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    

@dataclass
class ListFlowRevisionResponses:
    list_flow_revision_response: Optional[ListFlowRevision200ApplicationJSONListFlowRevisionResponse] = field(default=None)
    

@dataclass
class ListFlowRevisionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListFlowRevisionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
