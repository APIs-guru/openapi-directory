from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class ListExecutionPathParams:
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListExecutionQueryParams:
    date_created_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedFrom', 'style': 'form', 'explode': True }})
    date_created_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedTo', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListExecutionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListExecutionPathParams = field(default=None)
    query_params: ListExecutionQueryParams = field(default=None)
    security: ListExecutionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListExecution200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListExecution200ApplicationJSONListExecutionResponse:
    executions: Optional[List[shared.StudioV2FlowExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executions' }})
    meta: Optional[ListExecution200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListExecutionResponse:
    content_type: str = field(default=None)
    list_execution_response: Optional[ListExecution200ApplicationJSONListExecutionResponse] = field(default=None)
    status_code: int = field(default=None)
    
