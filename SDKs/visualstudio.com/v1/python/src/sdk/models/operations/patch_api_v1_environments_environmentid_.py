from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDRequests:
    update_cloud_environment_body: Optional[shared.UpdateCloudEnvironmentBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_cloud_environment_body1: Optional[shared.UpdateCloudEnvironmentBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_cloud_environment_body2: Optional[shared.UpdateCloudEnvironmentBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    update_cloud_environment_body3: Optional[shared.UpdateCloudEnvironmentBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDRequest:
    path_params: PatchAPIV1EnvironmentsEnvironmentIDPathParams = field(default=None)
    request: Optional[PatchAPIV1EnvironmentsEnvironmentIDRequests] = field(default=None)
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDResponse:
    body: bytes = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    content_type: str = field(default=None)
    message_codes: Optional[List[int]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
