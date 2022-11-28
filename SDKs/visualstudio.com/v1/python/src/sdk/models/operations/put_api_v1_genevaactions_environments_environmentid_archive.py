from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchivePathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchiveRequest:
    path_params: PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchivePathParams = field()
    

@dataclass
class PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
