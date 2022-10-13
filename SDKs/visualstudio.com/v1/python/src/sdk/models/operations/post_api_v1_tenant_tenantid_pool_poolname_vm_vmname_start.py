from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartPathParams:
    pool_name: str = field(default=None, metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    vm_name: str = field(default=None, metadata={'path_param': { 'field_name': 'vmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartRequest:
    path_params: PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartPathParams = field(default=None)
    

@dataclass
class PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
