from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BatchRetrieveInventoryChangesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BatchRetrieveInventoryChangesRequest:
    request: shared.BatchRetrieveInventoryChangesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BatchRetrieveInventoryChangesSecurity = field(default=None)
    

@dataclass
class BatchRetrieveInventoryChangesResponse:
    batch_retrieve_inventory_changes_response: Optional[shared.BatchRetrieveInventoryChangesResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
