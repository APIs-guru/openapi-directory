from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutAPIV1TenantTenantIDPathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1TenantTenantIDRequest:
    path_params: PutAPIV1TenantTenantIDPathParams = field(default=None)
    

@dataclass
class PutAPIV1TenantTenantIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
