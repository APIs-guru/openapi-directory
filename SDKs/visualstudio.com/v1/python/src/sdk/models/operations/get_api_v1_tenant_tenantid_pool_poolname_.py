from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1TenantTenantIDPoolPoolNamePathParams:
    pool_name: str = field(metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1TenantTenantIDPoolPoolNameRequest:
    path_params: GetAPIV1TenantTenantIDPoolPoolNamePathParams = field()
    

@dataclass
class GetAPIV1TenantTenantIDPoolPoolNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    pool_result: Optional[shared.PoolResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
