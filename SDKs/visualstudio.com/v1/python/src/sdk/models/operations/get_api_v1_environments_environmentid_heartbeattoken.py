from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenRequest:
    path_params: GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenPathParams = field(default=None)
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenResponse:
    body: bytes = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
