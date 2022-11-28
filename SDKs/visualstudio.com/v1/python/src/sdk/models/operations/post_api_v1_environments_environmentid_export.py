from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostAPIV1EnvironmentsEnvironmentIDExportPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1EnvironmentsEnvironmentIDExportRequest:
    path_params: PostAPIV1EnvironmentsEnvironmentIDExportPathParams = field()
    

@dataclass
class PostAPIV1EnvironmentsEnvironmentIDExportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    message_codes: Optional[int] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
