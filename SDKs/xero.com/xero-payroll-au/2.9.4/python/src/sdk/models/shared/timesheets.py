from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timesheet


@dataclass_json
@dataclass
class Timesheets:
    timesheets: Optional[List[timesheet.Timesheet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timesheets' }})
    
