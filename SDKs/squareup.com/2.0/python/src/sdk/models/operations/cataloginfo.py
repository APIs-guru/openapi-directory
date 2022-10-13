from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CatalogInfoSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CatalogInfoRequest:
    security: CatalogInfoSecurity = field(default=None)
    

@dataclass
class CatalogInfoResponse:
    catalog_info_response: Optional[shared.CatalogInfoResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
