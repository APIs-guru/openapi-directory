from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventorychange


@dataclass_json
@dataclass
class BatchChangeInventoryRequest:
    changes: Optional[List[inventorychange.InventoryChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    ignore_unchanged_counts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignore_unchanged_counts' }})
    
