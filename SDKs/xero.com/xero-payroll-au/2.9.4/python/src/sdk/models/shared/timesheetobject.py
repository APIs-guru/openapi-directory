from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timesheet


@dataclass_json
@dataclass
class TimesheetObject:
    timesheet: Optional[timesheet.Timesheet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timesheet' }})
    
