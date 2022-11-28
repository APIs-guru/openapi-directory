from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListFlexFlowListFlexFlowResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListFlexFlowListFlexFlowResponse:
    flex_flows: Optional[List[shared.FlexV1FlexFlow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flex_flows') }})
    meta: Optional[ListFlexFlowListFlexFlowResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListFlexFlowRequest:
    query_params: ListFlexFlowQueryParams = field()
    security: ListFlexFlowSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListFlexFlowResponse:
    content_type: str = field()
    status_code: int = field()
    list_flex_flow_response: Optional[ListFlexFlowListFlexFlowResponse] = field(default=None)
    
