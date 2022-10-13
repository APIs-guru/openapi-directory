from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams:
    pool_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'poolGroupName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests:
    create_pool_group_body: Optional[shared.CreatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_pool_group_body1: Optional[shared.CreatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_pool_group_body2: Optional[shared.CreatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_pool_group_body3: Optional[shared.CreatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest:
    path_params: PutAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams = field(default=None)
    request: Optional[PutAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests] = field(default=None)
    

@dataclass
class PutAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
