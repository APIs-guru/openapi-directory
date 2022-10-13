from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shiftfilter
from . import shiftsort


@dataclass_json
@dataclass
class ShiftQuery:
    filter: Optional[shiftfilter.ShiftFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    sort: Optional[shiftsort.ShiftSort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    
