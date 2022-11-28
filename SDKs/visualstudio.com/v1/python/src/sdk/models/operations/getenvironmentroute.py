from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetEnvironmentRoutePathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnvironmentRouteQueryParams:
    connect: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'connect', 'style': 'form', 'explode': True }})
    pf_connect: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pfConnect', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEnvironmentRouteRequest:
    path_params: GetEnvironmentRoutePathParams = field()
    query_params: GetEnvironmentRouteQueryParams = field()
    

@dataclass
class GetEnvironmentRouteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
