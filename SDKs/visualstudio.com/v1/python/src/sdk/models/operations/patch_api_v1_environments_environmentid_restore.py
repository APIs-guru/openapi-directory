from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDRestorePathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDRestoreRequest:
    path_params: PatchAPIV1EnvironmentsEnvironmentIDRestorePathParams = field()
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDRestoreResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
