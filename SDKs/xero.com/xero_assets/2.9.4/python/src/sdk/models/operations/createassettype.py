from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAssetTypeHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAssetTypeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAssetTypeRequest:
    headers: CreateAssetTypeHeaders = field(default=None)
    request: Optional[shared.AssetType] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAssetTypeSecurity = field(default=None)
    

@dataclass
class CreateAssetTypeResponse:
    asset_type: Optional[shared.AssetType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
