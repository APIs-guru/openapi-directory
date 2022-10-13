from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import timesheetstatus_enum
from . import timesheetline
from . import validationerror


@dataclass_json
@dataclass
class Timesheet:
    employee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeeID' }})
    end_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate' }})
    hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hours' }})
    start_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    status: Optional[timesheetstatus_enum.TimesheetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    timesheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimesheetID' }})
    timesheet_lines: Optional[List[timesheetline.TimesheetLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimesheetLines' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    validation_errors: Optional[List[validationerror.ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationErrors' }})
    
