from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_STEP_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class ListStepPathParams:
    engagement_sid: str = field(metadata={'path_param': { 'field_name': 'EngagementSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListStepQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListStepSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListStepListStepResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListStepListStepResponse:
    meta: Optional[ListStepListStepResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    steps: Optional[List[shared.StudioV1FlowEngagementStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    

@dataclass
class ListStepRequest:
    path_params: ListStepPathParams = field()
    query_params: ListStepQueryParams = field()
    security: ListStepSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListStepResponse:
    content_type: str = field()
    status_code: int = field()
    list_step_response: Optional[ListStepListStepResponse] = field(default=None)
    
