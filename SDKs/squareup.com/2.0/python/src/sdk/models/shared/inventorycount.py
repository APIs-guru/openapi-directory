from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InventoryCount:
    calculated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calculated_at' }})
    catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_id' }})
    catalog_object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_type' }})
    is_estimated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_estimated' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
