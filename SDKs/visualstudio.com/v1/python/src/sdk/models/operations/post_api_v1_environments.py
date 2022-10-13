from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostAPIV1EnvironmentsQueryParams:
    access: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPIV1EnvironmentsRequests:
    create_cloud_environment_body: Optional[shared.CreateCloudEnvironmentBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_cloud_environment_body1: Optional[shared.CreateCloudEnvironmentBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_cloud_environment_body2: Optional[shared.CreateCloudEnvironmentBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_cloud_environment_body3: Optional[shared.CreateCloudEnvironmentBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1EnvironmentsRequest:
    query_params: PostAPIV1EnvironmentsQueryParams = field(default=None)
    request: Optional[PostAPIV1EnvironmentsRequests] = field(default=None)
    

@dataclass
class PostAPIV1EnvironmentsResponse:
    body: bytes = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    content_type: str = field(default=None)
    message_codes: Optional[int] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
