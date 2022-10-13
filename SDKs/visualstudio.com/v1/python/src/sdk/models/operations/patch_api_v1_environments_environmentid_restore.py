from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDRestorePathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDRestoreRequest:
    path_params: PatchAPIV1EnvironmentsEnvironmentIDRestorePathParams = field(default=None)
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDRestoreResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
