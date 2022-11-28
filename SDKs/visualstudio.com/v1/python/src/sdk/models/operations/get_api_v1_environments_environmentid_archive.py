from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1EnvironmentsEnvironmentIDArchivePathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDArchiveRequest:
    path_params: GetAPIV1EnvironmentsEnvironmentIDArchivePathParams = field()
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    message_codes: Optional[int] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    unfiltered_cloud_environment_result: Optional[shared.UnfilteredCloudEnvironmentResult] = field(default=None)
    
