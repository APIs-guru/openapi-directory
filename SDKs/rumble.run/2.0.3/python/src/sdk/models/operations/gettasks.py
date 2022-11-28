from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTasksQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTasksSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTasksRequest:
    query_params: GetTasksQueryParams = field()
    security: GetTasksSecurity = field()
    

@dataclass
class GetTasksResponse:
    content_type: str = field()
    status_code: int = field()
    tasks: Optional[List[shared.Task]] = field(default=None)
    
