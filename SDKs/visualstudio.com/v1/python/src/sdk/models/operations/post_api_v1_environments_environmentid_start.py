from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostAPIV1EnvironmentsEnvironmentIDStartPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1EnvironmentsEnvironmentIDStartQueryParams:
    access: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPIV1EnvironmentsEnvironmentIDStartRequest:
    path_params: PostAPIV1EnvironmentsEnvironmentIDStartPathParams = field(default=None)
    query_params: PostAPIV1EnvironmentsEnvironmentIDStartQueryParams = field(default=None)
    

@dataclass
class PostAPIV1EnvironmentsEnvironmentIDStartResponse:
    body: bytes = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    content_type: str = field(default=None)
    message_codes: Optional[int] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
