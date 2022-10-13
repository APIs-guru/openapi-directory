from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class ListEngagementPathParams:
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListEngagementQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEngagementSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListEngagementRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListEngagementPathParams = field(default=None)
    query_params: ListEngagementQueryParams = field(default=None)
    security: ListEngagementSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListEngagement200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListEngagement200ApplicationJSONListEngagementResponse:
    engagements: Optional[List[shared.StudioV1FlowEngagement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engagements' }})
    meta: Optional[ListEngagement200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListEngagementResponses:
    list_engagement_response: Optional[ListEngagement200ApplicationJSONListEngagementResponse] = field(default=None)
    

@dataclass
class ListEngagementResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListEngagementResponses]] = field(default=None)
    status_code: int = field(default=None)
    
