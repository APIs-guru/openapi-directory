from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeprecatedBatchRetrieveInventoryCountsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeprecatedBatchRetrieveInventoryCountsRequest:
    request: shared.BatchRetrieveInventoryCountsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DeprecatedBatchRetrieveInventoryCountsSecurity = field(default=None)
    

@dataclass
class DeprecatedBatchRetrieveInventoryCountsResponse:
    batch_retrieve_inventory_counts_response: Optional[shared.BatchRetrieveInventoryCountsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
