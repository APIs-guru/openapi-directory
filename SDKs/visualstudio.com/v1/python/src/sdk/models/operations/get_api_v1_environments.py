from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAPIV1EnvironmentsQueryParams:
    deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1EnvironmentsRequest:
    query_params: GetAPIV1EnvironmentsQueryParams = field()
    

@dataclass
class GetAPIV1EnvironmentsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    cloud_environment_results: Optional[List[shared.CloudEnvironmentResult]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
