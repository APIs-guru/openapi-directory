from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAssetTypeHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAssetTypeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAssetTypeRequest:
    headers: CreateAssetTypeHeaders = field()
    security: CreateAssetTypeSecurity = field()
    request: Optional[shared.AssetType] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAssetTypeResponse:
    content_type: str = field()
    status_code: int = field()
    asset_type: Optional[shared.AssetType] = field(default=None)
    
