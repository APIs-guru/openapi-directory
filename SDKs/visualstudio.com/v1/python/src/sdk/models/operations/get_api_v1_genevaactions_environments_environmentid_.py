from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1GenevaActionsEnvironmentsEnvironmentIDPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1GenevaActionsEnvironmentsEnvironmentIDRequest:
    path_params: GetAPIV1GenevaActionsEnvironmentsEnvironmentIDPathParams = field()
    

@dataclass
class GetAPIV1GenevaActionsEnvironmentsEnvironmentIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
