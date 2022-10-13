from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchCatalogItemsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchCatalogItemsRequest:
    request: shared.SearchCatalogItemsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchCatalogItemsSecurity = field(default=None)
    

@dataclass
class SearchCatalogItemsResponse:
    content_type: str = field(default=None)
    search_catalog_items_response: Optional[shared.SearchCatalogItemsResponse] = field(default=None)
    status_code: int = field(default=None)
    
