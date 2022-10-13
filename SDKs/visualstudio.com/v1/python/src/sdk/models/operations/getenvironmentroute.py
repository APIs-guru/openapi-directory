from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetEnvironmentRoutePathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnvironmentRouteQueryParams:
    connect: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'connect', 'style': 'form', 'explode': True }})
    pf_connect: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pfConnect', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEnvironmentRouteRequest:
    path_params: GetEnvironmentRoutePathParams = field(default=None)
    query_params: GetEnvironmentRouteQueryParams = field(default=None)
    

@dataclass
class GetEnvironmentRouteResponse:
    body: bytes = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
