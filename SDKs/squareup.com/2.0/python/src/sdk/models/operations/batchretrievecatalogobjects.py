from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BatchRetrieveCatalogObjectsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BatchRetrieveCatalogObjectsRequest:
    request: shared.BatchRetrieveCatalogObjectsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BatchRetrieveCatalogObjectsSecurity = field(default=None)
    

@dataclass
class BatchRetrieveCatalogObjectsResponse:
    batch_retrieve_catalog_objects_response: Optional[shared.BatchRetrieveCatalogObjectsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
