from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InventoryAdjustmentGroup:
    from_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_state' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    root_adjustment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_adjustment_id' }})
    to_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_state' }})
    
