from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PatchAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams:
    pool_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'poolGroupName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests:
    update_pool_group_body: Optional[shared.UpdatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_pool_group_body1: Optional[shared.UpdatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_pool_group_body2: Optional[shared.UpdatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    update_pool_group_body3: Optional[shared.UpdatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest:
    path_params: PatchAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams = field(default=None)
    request: Optional[PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests] = field(default=None)
    

@dataclass
class PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
