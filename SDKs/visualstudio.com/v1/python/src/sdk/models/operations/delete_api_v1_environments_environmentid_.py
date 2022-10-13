from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDRequest:
    path_params: DeleteAPIV1EnvironmentsEnvironmentIDPathParams = field(default=None)
    

@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
