from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutAPIV1PrebuildsPoolsPoolIDInstancesPathParams:
    pool_id: str = field(metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1PrebuildsPoolsPoolIDInstancesRequests:
    create_environment_pool_resource_body: Optional[shared.CreateEnvironmentPoolResourceBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_environment_pool_resource_body1: Optional[shared.CreateEnvironmentPoolResourceBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_environment_pool_resource_body2: Optional[shared.CreateEnvironmentPoolResourceBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_environment_pool_resource_body3: Optional[shared.CreateEnvironmentPoolResourceBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutAPIV1PrebuildsPoolsPoolIDInstancesRequest:
    path_params: PutAPIV1PrebuildsPoolsPoolIDInstancesPathParams = field()
    request: Optional[PutAPIV1PrebuildsPoolsPoolIDInstancesRequests] = field(default=None)
    

@dataclass
class PutAPIV1PrebuildsPoolsPoolIDInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
