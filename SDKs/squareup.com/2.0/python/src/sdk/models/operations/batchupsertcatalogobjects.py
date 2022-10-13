from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BatchUpsertCatalogObjectsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BatchUpsertCatalogObjectsRequest:
    request: shared.BatchUpsertCatalogObjectsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BatchUpsertCatalogObjectsSecurity = field(default=None)
    

@dataclass
class BatchUpsertCatalogObjectsResponse:
    batch_upsert_catalog_objects_response: Optional[shared.BatchUpsertCatalogObjectsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
