from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAssetHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAssetSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAssetRequest:
    headers: CreateAssetHeaders = field()
    request: shared.Asset = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAssetSecurity = field()
    

@dataclass
class CreateAssetResponse:
    content_type: str = field()
    status_code: int = field()
    asset: Optional[shared.Asset] = field(default=None)
    
