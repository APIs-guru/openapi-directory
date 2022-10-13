from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import shift


@dataclass_json
@dataclass
class UpdateShiftRequest:
    shift: shift.Shift = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shift' }})
    
