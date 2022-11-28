from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class ListExecutionPathParams:
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListExecutionQueryParams:
    date_created_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedFrom', 'style': 'form', 'explode': True }})
    date_created_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedTo', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListExecutionListExecutionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListExecutionListExecutionResponse:
    executions: Optional[List[shared.StudioV1FlowExecution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    meta: Optional[ListExecutionListExecutionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListExecutionRequest:
    path_params: ListExecutionPathParams = field()
    query_params: ListExecutionQueryParams = field()
    security: ListExecutionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    list_execution_response: Optional[ListExecutionListExecutionResponse] = field(default=None)
    
