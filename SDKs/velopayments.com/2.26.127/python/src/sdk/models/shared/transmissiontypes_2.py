from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TransmissionTypes2:
    ach: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACH' }})
    same_day_ach: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SAME_DAY_ACH' }})
    wire: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WIRE' }})
    
