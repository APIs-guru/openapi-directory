from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourceapplication


@dataclass_json
@dataclass
class InventoryPhysicalCount:
    catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_id' }})
    catalog_object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_type' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    occurred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurred_at' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    source: Optional[sourceapplication.SourceApplication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
