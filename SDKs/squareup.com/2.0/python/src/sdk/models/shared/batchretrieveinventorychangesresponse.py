from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventorychange
from . import error


@dataclass_json
@dataclass
class BatchRetrieveInventoryChangesResponse:
    changes: Optional[List[inventorychange.InventoryChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
