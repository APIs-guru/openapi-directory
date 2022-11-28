from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountTasksQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountTasksSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountTasksRequest:
    query_params: GetAccountTasksQueryParams = field()
    security: GetAccountTasksSecurity = field()
    

@dataclass
class GetAccountTasksResponse:
    content_type: str = field()
    status_code: int = field()
    tasks: Optional[List[shared.Task]] = field(default=None)
    
