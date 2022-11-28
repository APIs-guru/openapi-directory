from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams:
    pool_name: str = field(metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    vm_name: str = field(metadata={'path_param': { 'field_name': 'vmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNameRequest:
    path_params: DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams = field()
    

@dataclass
class DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
