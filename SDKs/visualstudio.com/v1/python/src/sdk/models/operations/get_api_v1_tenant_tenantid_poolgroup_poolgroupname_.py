from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams:
    pool_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'poolGroupName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest:
    path_params: GetAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams = field(default=None)
    

@dataclass
class GetAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pool_group_result: Optional[shared.PoolGroupResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
