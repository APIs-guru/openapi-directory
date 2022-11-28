from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams:
    pool_group_name: str = field(metadata={'path_param': { 'field_name': 'poolGroupName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest:
    path_params: DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams = field()
    

@dataclass
class DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
