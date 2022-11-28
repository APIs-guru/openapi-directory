from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDRequest:
    path_params: DeleteAPIV1EnvironmentsEnvironmentIDPathParams = field()
    

@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
