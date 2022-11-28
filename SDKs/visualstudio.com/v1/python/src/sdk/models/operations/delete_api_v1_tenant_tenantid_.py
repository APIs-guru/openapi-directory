from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1TenantTenantIDPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1TenantTenantIDRequest:
    path_params: DeleteAPIV1TenantTenantIDPathParams = field()
    

@dataclass
class DeleteAPIV1TenantTenantIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
