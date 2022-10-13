from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import shift


@dataclass_json
@dataclass
class CreateShiftResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    shift: Optional[shift.Shift] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shift' }})
    
