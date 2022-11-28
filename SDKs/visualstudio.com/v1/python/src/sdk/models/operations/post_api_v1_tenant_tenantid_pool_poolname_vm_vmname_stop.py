from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopPathParams:
    pool_name: str = field(metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    vm_name: str = field(metadata={'path_param': { 'field_name': 'vmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopRequest:
    path_params: PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopPathParams = field()
    

@dataclass
class PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
