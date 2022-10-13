from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventorycount
from . import error


@dataclass_json
@dataclass
class RetrieveInventoryCountResponse:
    counts: Optional[List[inventorycount.InventoryCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counts' }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
