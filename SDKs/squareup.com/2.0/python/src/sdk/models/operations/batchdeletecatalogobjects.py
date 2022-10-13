from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BatchDeleteCatalogObjectsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BatchDeleteCatalogObjectsRequest:
    request: shared.BatchDeleteCatalogObjectsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BatchDeleteCatalogObjectsSecurity = field(default=None)
    

@dataclass
class BatchDeleteCatalogObjectsResponse:
    batch_delete_catalog_objects_response: Optional[shared.BatchDeleteCatalogObjectsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
