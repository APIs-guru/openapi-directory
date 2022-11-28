from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LeaveApplication:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    leave_application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveApplicationID') }})
    leave_periods: Optional[List[LeavePeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeavePeriods') }})
    leave_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypeID') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    

@dataclass_json
@dataclass
class LeaveApplicationInput:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    leave_application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveApplicationID') }})
    leave_periods: Optional[List[LeavePeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeavePeriods') }})
    leave_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypeID') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    
