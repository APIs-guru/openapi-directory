from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAssetHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAssetSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAssetRequest:
    headers: CreateAssetHeaders = field(default=None)
    request: shared.Asset = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAssetSecurity = field(default=None)
    

@dataclass
class CreateAssetResponse:
    asset: Optional[shared.Asset] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
