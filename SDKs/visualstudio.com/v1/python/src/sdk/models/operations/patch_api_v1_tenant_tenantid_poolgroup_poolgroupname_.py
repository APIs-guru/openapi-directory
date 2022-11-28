from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PatchAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams:
    pool_group_name: str = field(metadata={'path_param': { 'field_name': 'poolGroupName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests:
    update_pool_group_body: Optional[shared.UpdatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_pool_group_body1: Optional[shared.UpdatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_pool_group_body2: Optional[shared.UpdatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    update_pool_group_body3: Optional[shared.UpdatePoolGroupBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest:
    path_params: PatchAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams = field()
    request: Optional[PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests] = field(default=None)
    

@dataclass
class PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
