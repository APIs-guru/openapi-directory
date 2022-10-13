from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpsertCatalogObjectSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpsertCatalogObjectRequest:
    request: shared.UpsertCatalogObjectRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpsertCatalogObjectSecurity = field(default=None)
    

@dataclass
class UpsertCatalogObjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    upsert_catalog_object_response: Optional[shared.UpsertCatalogObjectResponse] = field(default=None)
    
