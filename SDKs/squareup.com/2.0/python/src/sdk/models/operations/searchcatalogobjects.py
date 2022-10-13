from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchCatalogObjectsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchCatalogObjectsRequest:
    request: shared.SearchCatalogObjectsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchCatalogObjectsSecurity = field(default=None)
    

@dataclass
class SearchCatalogObjectsResponse:
    content_type: str = field(default=None)
    search_catalog_objects_response: Optional[shared.SearchCatalogObjectsResponse] = field(default=None)
    status_code: int = field(default=None)
    
