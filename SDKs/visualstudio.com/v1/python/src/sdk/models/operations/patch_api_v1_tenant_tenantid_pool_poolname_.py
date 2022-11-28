from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PatchAPIV1TenantTenantIDPoolPoolNamePathParams:
    pool_name: str = field(metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAPIV1TenantTenantIDPoolPoolNameRequests:
    create_or_update_pool_body: Optional[shared.CreateOrUpdatePoolBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_or_update_pool_body1: Optional[shared.CreateOrUpdatePoolBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_or_update_pool_body2: Optional[shared.CreateOrUpdatePoolBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_or_update_pool_body3: Optional[shared.CreateOrUpdatePoolBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PatchAPIV1TenantTenantIDPoolPoolNameRequest:
    path_params: PatchAPIV1TenantTenantIDPoolPoolNamePathParams = field()
    request: Optional[PatchAPIV1TenantTenantIDPoolPoolNameRequests] = field(default=None)
    

@dataclass
class PatchAPIV1TenantTenantIDPoolPoolNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    pool_result: Optional[shared.PoolResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
