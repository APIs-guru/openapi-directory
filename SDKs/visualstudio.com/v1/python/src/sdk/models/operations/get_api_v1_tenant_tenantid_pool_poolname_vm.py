from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAPIV1TenantTenantIDPoolPoolNameVMPathParams:
    pool_name: str = field(default=None, metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1TenantTenantIDPoolPoolNameVMRequest:
    path_params: GetAPIV1TenantTenantIDPoolPoolNameVMPathParams = field(default=None)
    

@dataclass
class GetAPIV1TenantTenantIDPoolPoolNameVMResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    vm_results: Optional[List[shared.VMResult]] = field(default=None)
    
