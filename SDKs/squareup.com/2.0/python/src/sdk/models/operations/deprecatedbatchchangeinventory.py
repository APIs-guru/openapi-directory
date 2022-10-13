from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeprecatedBatchChangeInventorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeprecatedBatchChangeInventoryRequest:
    request: shared.BatchChangeInventoryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DeprecatedBatchChangeInventorySecurity = field(default=None)
    

@dataclass
class DeprecatedBatchChangeInventoryResponse:
    batch_change_inventory_response: Optional[shared.BatchChangeInventoryResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
