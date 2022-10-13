from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryadjustment
from . import error


@dataclass_json
@dataclass
class RetrieveInventoryAdjustmentResponse:
    adjustment: Optional[inventoryadjustment.InventoryAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustment' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
