from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventorychange
from . import inventorycount
from . import error


@dataclass_json
@dataclass
class BatchChangeInventoryResponse:
    changes: Optional[List[inventorychange.InventoryChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    counts: Optional[List[inventorycount.InventoryCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counts' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
