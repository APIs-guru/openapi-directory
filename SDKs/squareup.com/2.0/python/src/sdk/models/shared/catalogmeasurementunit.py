from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import measurementunit


@dataclass_json
@dataclass
class CatalogMeasurementUnit:
    measurement_unit: Optional[measurementunit.MeasurementUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement_unit' }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    
