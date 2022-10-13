from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inventoryadjustment
from . import catalogmeasurementunit
from . import inventoryphysicalcount
from . import inventorytransfer


@dataclass_json
@dataclass
class InventoryChange:
    adjustment: Optional[inventoryadjustment.InventoryAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustment' }})
    measurement_unit: Optional[catalogmeasurementunit.CatalogMeasurementUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement_unit' }})
    measurement_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement_unit_id' }})
    physical_count: Optional[inventoryphysicalcount.InventoryPhysicalCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physical_count' }})
    transfer: Optional[inventorytransfer.InventoryTransfer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
