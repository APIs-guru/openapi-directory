from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1TenantTenantIDPoolPoolNamePathParams:
    pool_name: str = field(default=None, metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1TenantTenantIDPoolPoolNameRequest:
    path_params: DeleteAPIV1TenantTenantIDPoolPoolNamePathParams = field(default=None)
    

@dataclass
class DeleteAPIV1TenantTenantIDPoolPoolNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
