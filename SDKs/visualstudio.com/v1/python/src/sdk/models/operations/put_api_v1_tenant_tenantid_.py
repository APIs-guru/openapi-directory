from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutAPIV1TenantTenantIDPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1TenantTenantIDRequest:
    path_params: PutAPIV1TenantTenantIDPathParams = field()
    

@dataclass
class PutAPIV1TenantTenantIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
