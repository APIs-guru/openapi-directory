from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAPIV1EnvironmentsEnvironmentIDStatePathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDStateRequest:
    path_params: GetAPIV1EnvironmentsEnvironmentIDStatePathParams = field()
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDStateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
