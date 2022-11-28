from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDFolderPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDFolderRequests:
    cloud_environment_folder_body: Optional[shared.CloudEnvironmentFolderBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    cloud_environment_folder_body1: Optional[shared.CloudEnvironmentFolderBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    cloud_environment_folder_body2: Optional[shared.CloudEnvironmentFolderBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    cloud_environment_folder_body3: Optional[shared.CloudEnvironmentFolderBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDFolderRequest:
    path_params: PatchAPIV1EnvironmentsEnvironmentIDFolderPathParams = field()
    request: Optional[PatchAPIV1EnvironmentsEnvironmentIDFolderRequests] = field(default=None)
    

@dataclass
class PatchAPIV1EnvironmentsEnvironmentIDFolderResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    message_codes: Optional[List[int]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
