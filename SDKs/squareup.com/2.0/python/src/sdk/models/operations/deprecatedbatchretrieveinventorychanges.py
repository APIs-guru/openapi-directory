from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeprecatedBatchRetrieveInventoryChangesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeprecatedBatchRetrieveInventoryChangesRequest:
    request: shared.BatchRetrieveInventoryChangesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DeprecatedBatchRetrieveInventoryChangesSecurity = field(default=None)
    

@dataclass
class DeprecatedBatchRetrieveInventoryChangesResponse:
    batch_retrieve_inventory_changes_response: Optional[shared.BatchRetrieveInventoryChangesResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
