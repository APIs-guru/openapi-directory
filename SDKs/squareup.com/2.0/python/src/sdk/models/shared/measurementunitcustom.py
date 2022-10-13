from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MeasurementUnitCustom:
    abbreviation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
