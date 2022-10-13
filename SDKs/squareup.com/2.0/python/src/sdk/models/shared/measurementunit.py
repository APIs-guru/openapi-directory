from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import measurementunitcustom


@dataclass_json
@dataclass
class MeasurementUnit:
    area_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area_unit' }})
    custom_unit: Optional[measurementunitcustom.MeasurementUnitCustom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_unit' }})
    generic_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generic_unit' }})
    length_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length_unit' }})
    time_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_unit' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    volume_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_unit' }})
    weight_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight_unit' }})
    
