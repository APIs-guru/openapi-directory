from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import breaktype


@dataclass_json
@dataclass
class UpdateBreakTypeRequest:
    break_type: breaktype.BreakType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break_type' }})
    
