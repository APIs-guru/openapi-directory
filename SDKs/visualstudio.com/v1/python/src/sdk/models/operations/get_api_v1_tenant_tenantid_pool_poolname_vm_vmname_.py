from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams:
    pool_name: str = field(metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    vm_name: str = field(metadata={'path_param': { 'field_name': 'vmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1TenantTenantIDPoolPoolNameVMVMNameRequest:
    path_params: GetAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams = field()
    

@dataclass
class GetAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    vm_result: Optional[shared.VMResult] = field(default=None)
    
