from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAPIV1EnvironmentsEnvironmentIDStatePathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDStateRequest:
    path_params: GetAPIV1EnvironmentsEnvironmentIDStatePathParams = field(default=None)
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDStateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
