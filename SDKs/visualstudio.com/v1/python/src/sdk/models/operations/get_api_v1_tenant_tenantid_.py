from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1TenantTenantIDPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1TenantTenantIDRequest:
    path_params: GetAPIV1TenantTenantIDPathParams = field()
    

@dataclass
class GetAPIV1TenantTenantIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    tenant_info_result: Optional[shared.TenantInfoResult] = field(default=None)
    
