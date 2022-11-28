from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams:
    pool_name: str = field(metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    vm_name: str = field(metadata={'path_param': { 'field_name': 'vmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1TenantTenantIDPoolPoolNameVMVMNameRequests:
    claim_vm_body: Optional[shared.ClaimVMBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    claim_vm_body1: Optional[shared.ClaimVMBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    claim_vm_body2: Optional[shared.ClaimVMBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    claim_vm_body3: Optional[shared.ClaimVMBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutAPIV1TenantTenantIDPoolPoolNameVMVMNameRequest:
    path_params: PutAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams = field()
    request: Optional[PutAPIV1TenantTenantIDPoolPoolNameVMVMNameRequests] = field(default=None)
    

@dataclass
class PutAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    vm_result: Optional[shared.VMResult] = field(default=None)
    
