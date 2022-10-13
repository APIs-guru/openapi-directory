from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import leaveperiod
from . import validationerror


@dataclass_json
@dataclass
class LeaveApplication:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeeID' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate' }})
    leave_application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveApplicationID' }})
    leave_periods: Optional[List[leaveperiod.LeavePeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeavePeriods' }})
    leave_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveTypeID' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    validation_errors: Optional[List[validationerror.ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationErrors' }})
    
