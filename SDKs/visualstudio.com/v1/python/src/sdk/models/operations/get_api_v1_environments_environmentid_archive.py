from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1EnvironmentsEnvironmentIDArchivePathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDArchiveRequest:
    path_params: GetAPIV1EnvironmentsEnvironmentIDArchivePathParams = field(default=None)
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    message_codes: Optional[int] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    unfiltered_cloud_environment_result: Optional[shared.UnfilteredCloudEnvironmentResult] = field(default=None)
    
