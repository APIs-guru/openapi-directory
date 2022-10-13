from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import shift


@dataclass_json
@dataclass
class SearchShiftsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    shifts: Optional[List[shift.Shift]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shifts' }})
    
