from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryphysicalcount
from . import error


@dataclass_json
@dataclass
class RetrieveInventoryPhysicalCountResponse:
    count: Optional[inventoryphysicalcount.InventoryPhysicalCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
